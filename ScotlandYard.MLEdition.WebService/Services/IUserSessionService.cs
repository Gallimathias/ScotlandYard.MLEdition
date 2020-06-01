using Microsoft.IdentityModel.Tokens;
using ScotlandYard.MLEdition.WebService.Model;
using System;
using System.Collections.Generic;

namespace ScotlandYard.MLEdition.WebService.Services
{
    public interface IUserSessionService
    {
        SymmetricSecurityKey Key { get; }
        string Issuer { get; }

        string CreateToken(AuthRequest authRequest);
        string CreateToken(SemiAuthRequest authRequest);
        void LoadOrCreateKey();
    }
}