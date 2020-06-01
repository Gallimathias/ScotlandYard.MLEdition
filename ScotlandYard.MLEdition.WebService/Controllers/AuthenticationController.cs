using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ScotlandYard.Core;
using ScotlandYard.MLEdition.WebService.Model;
using ScotlandYard.MLEdition.WebService.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScotlandYard.MLEdition.WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AuthenticationController : ControllerBase
    {
        private readonly IUserSessionService usersessionService;

        public AuthenticationController()
        {
            usersessionService = TypeContainer.Get<IUserSessionService>();
        }

        [Route("[action]")]
        [HttpGet]
        public ActionResult Test()
        {
            return Ok();
        }

        [Route("login/user")]
        [HttpPost]
        [AllowAnonymous]
        public ActionResult LoginUser([FromBody]AuthRequest authRequest)
        {
            return Ok(usersessionService.CreateToken(authRequest));
        }

        [Route("login/semi")]
        [HttpPost]
        [AllowAnonymous]
        public ActionResult LoginSemi([FromBody]SemiAuthRequest authRequest)
        {
            return Ok(usersessionService.CreateToken(authRequest));
        }

        [Route("[action]")]
        [HttpGet]
        [AllowAnonymous]
        public ActionResult NewGuid() 
            => Ok(Guid.NewGuid().ToString("N"));
    }
}
