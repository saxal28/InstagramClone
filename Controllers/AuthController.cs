using System;
using System.Text;
using System.Threading.Tasks;
using InstagramClone.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using InstagramClone.Errors;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;


namespace InstagramClone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        
        // ================================
        // MARK: CONTROLLER INIT
        // ================================

        // database context
        private readonly AppDBContext _context;
    
        private IConfiguration _config;
        // constructor

        public AuthController(AppDBContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
            
            //hardcode user
            if (_context.Users.Count() == 0)
            {
                // create new user if no users, so we always have one
                _context.Users.Add(new User
                {
                    Username = "saxal28", Password = "gatorade2", 
                    Email = "saxal28@gmail.com", 
                    Id = 1, 
                    FirstName = "Alan", LastName = "Sax",
                    Token = null
                });
                _context.SaveChanges();
            }
        }

        // TOKEN
        private string BuildToken()
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        
        // ================================
        
        // Post
        [HttpPost("login")]
        public ActionResult<UserModel> Login(LoginModel loginModel)
        {
            var user = _context.Users.SingleOrDefault(b => b.Username == loginModel.Username && b.Password == loginModel.Password);

            if (user != null)
            {
                var token = BuildToken();
                var userModel = new UserModel
                {
                    Email = user.Email, 
                    Username = user.Username, 
                    FirstName = user.FirstName, 
                    LastName = user.LastName, 
                    Token = token
                };
                
                return Ok(userModel);
            }

            Console.WriteLine("Unauthorized");
            return Unauthorized(new UnauthorizedError {ErrorMessage = "Invalid Name / Password"});  
        }

        [HttpPost("register")]
        public ActionResult<UserModel> Register(RegisterModel registerModel)
        {
            if (registerModel.Username != "" && registerModel.Password != "")
            {
                // create user
                Console.WriteLine("CREATE USER");
                _context.Users.Add(new User
                {
                    Email = registerModel.Email, 
                    Username = registerModel.Username, 
                    Password = registerModel.Password, 
                    FirstName = registerModel.FirstName, 
                    LastName = registerModel.LastName
                });
                _context.SaveChanges();
                
                // return user model with token
                var token = BuildToken();
                var userModel = new UserModel
                {
                    Email = registerModel.Email, 
                    Username = registerModel.Username, 
                    FirstName = registerModel.FirstName, 
                    LastName = registerModel.LastName, 
                    Token = token
                };
                
                return Ok(userModel);
            }

            return BadRequest();
        }


    }
}
