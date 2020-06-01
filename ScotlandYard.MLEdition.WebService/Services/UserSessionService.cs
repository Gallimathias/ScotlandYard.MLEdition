using Microsoft.IdentityModel.Tokens;
using ScotlandYard.MLEdition.WebService.Model;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;
using System.Security.Cryptography;

namespace ScotlandYard.MLEdition.WebService.Services
{
    public sealed class UserSessionService : IUserSessionService, ISecurityTokenValidator
    {
        public SymmetricSecurityKey Key { get; private set; }
        public string Issuer { get; }

        public bool CanValidateToken => tokenHandler.CanValidateToken;

        public int MaximumTokenSizeInBytes
        {
            get => tokenHandler.MaximumTokenSizeInBytes;
            set => tokenHandler.MaximumTokenSizeInBytes = value;
        }

        private readonly JwtSecurityTokenHandler tokenHandler;

        public UserSessionService(string issuer)
        {
            tokenHandler = new JwtSecurityTokenHandler();
            Issuer = issuer;
        }

        public void LoadOrCreateKey()
        {
            var key = new byte[128];
            var keyFile = new FileInfo(Path.Combine(".", "jwt", "issuer.key"));

            if (!keyFile.Exists)
            {
                if (!keyFile.Directory.Exists)
                    keyFile.Directory.Create();

                GenerateNewKey(ref key, 0, key.Length);
                File.WriteAllBytes(keyFile.FullName, key);
            }
            else
            {
                key = File.ReadAllBytes(keyFile.FullName);
            }

            Key = new SymmetricSecurityKey(key);
        }


        public string CreateToken(AuthRequest authRequest)
        {
            //user lookup
            return InternalCreate(new User { IsRegistered = true, Username = authRequest.Username });
        }

        public string CreateToken(SemiAuthRequest authRequest)
        {
            //temp add and temp handling
            return InternalCreate(new User { IsRegistered = false, Username = authRequest.SemiId });
        }

        private string InternalCreate(User user)
        {
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                            {
                    new Claim(ClaimTypes.Name, user.Username),
                    new Claim("session", new Guid().ToString()),
                    new Claim("registered", user.IsRegistered.ToString())
                            }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(Key, SecurityAlgorithms.HmacSha512Signature),
                Issuer = Issuer,
                NotBefore = DateTime.Now,
                IssuedAt = DateTime.Now
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private void GenerateNewKey(ref byte[] key, int offset, int count)
        {
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(key, offset, count);
        }

        public bool CanReadToken(string securityToken)
            => tokenHandler.CanReadToken(securityToken);

        public ClaimsPrincipal ValidateToken(string securityToken,
                TokenValidationParameters validationParameters,
                out SecurityToken validatedToken)
        {
            return tokenHandler.ValidateToken(securityToken, validationParameters, out validatedToken);
        }
    }
}
