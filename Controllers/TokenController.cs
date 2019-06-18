using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace InstagramClone.Controllers
{
    [Route("api/[controller]")]
    public class TokenController: Controller
    {        
        // ============================
        //  MARK: Init
        // ============================

        private IConfiguration _config;

        public TokenController(IConfiguration config)
        {
            _config = config;
        }

        // ============================
        // MARK: Token Routes
        // ============================
        
        [AllowAnonymous]
        [HttpPost]
        public IActionResult CreateToken([FromBody]LoginModel login)
        {
            IActionResult response = Unauthorized();
            var user = Login(login);

            if (user != null)
            {
                var tokenString = BuildToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string BuildToken(UserModel user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        
        // ============================
        // MARK: User Authentication Routes
        // ============================

        private UserModel Login(LoginModel login)
        {
            UserModel user = null;

            Console.WriteLine(login);

            if (login.Username == "saxal28" && login.Password == "gatorade2")
            {
                Console.WriteLine("MATCH!");
                user = new UserModel {Name = "Alan", Email = "email"};
            }

            return user;
        }
    }
}

public class LoginModel
{
    public string Username { get; set; }
    public string Password { get; set; }
}

public class UserModel
{
    public string Name { get; set; }
    public string Email { get; set; }
}