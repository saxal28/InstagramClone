using System.Net;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace InstagramClone.Errors
{
    public class ApiError
    {
        public int StatusCode { get; set; }
        public string StatusDescription { get; set; }
        public string ErrorMessage { get; set; }

        public ApiError(int statusCode, string statusDescription, string message = "")
        {
            StatusCode = statusCode;
            StatusDescription = statusDescription;
            ErrorMessage = message;
        }
    }
    
    
    // internal server error
    public class InternalServerError : ApiError
    {
        public InternalServerError() : base(StatusCodes.Status500InternalServerError, HttpStatusCode.InternalServerError.ToString()) 
        {}
        
        public InternalServerError(string message) : base(StatusCodes.Status500InternalServerError, HttpStatusCode.InternalServerError.ToString(), message) 
        {}
    }
    
    // not found error
    public class NotFoundError : ApiError
    {
        public NotFoundError() : base(StatusCodes.Status404NotFound, HttpStatusCode.NotFound.ToString()) 
        {}
        
        public NotFoundError(string message) : base(StatusCodes.Status404NotFound, HttpStatusCode.NotFound.ToString(), message) 
        {}
    }
    
    // unauthorized request
    public class UnauthorizedError : ApiError
    {
        public UnauthorizedError() : base(StatusCodes.Status401Unauthorized, HttpStatusCode.Unauthorized.ToString()) 
        {}
        
        public UnauthorizedError(string message) : base(StatusCodes.Status401Unauthorized, HttpStatusCode.Unauthorized.ToString(), message) 
        {}
    }
    
    // forbid request
    // bad request
}