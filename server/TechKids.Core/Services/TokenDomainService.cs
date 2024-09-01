using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using TechKids.Core.Configurations.Models;
using TechKids.Core.Interfaces.Services;
using TechKids.Shared.Utils;

namespace TechKids.Core.Services
{
    public class TokenDomainService : ITokenDomainService
    {
        private const int TOKEN_DURATION_IN_HOURS = 12;
        private static readonly JwtSecurityTokenHandler _tokenHandler = new();

        private static byte[] Key => Encoding.ASCII.GetBytes(Settings.SecretKey);

        private static ClaimsPrincipal Validate(string token)
        {
            TokenValidationParameters validationParameters =
                new()
                {
                    ValidateLifetime = true,
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Key)
                };

            return new JwtSecurityTokenHandler().ValidateToken(token, validationParameters, out _);
        }

        public string Generate(StudentClaimsModel studentClaims)
        {
            bool soundPreference =
                studentClaims.Preference_Sound != null && (bool)studentClaims.Preference_Sound;

            bool vibrationPreference =
                studentClaims.Preference_Vibration != null
                && (bool)studentClaims.Preference_Vibration;

            var securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = DateTime.Now.AddHours(TOKEN_DURATION_IN_HOURS).ToUniversalTime(),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(Key),
                    SecurityAlgorithms.HmacSha256Signature
                ),
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new("Id", studentClaims.Id.ToString()),
                        new("Name", studentClaims.Name),
                        new("Email", studentClaims.Email),
                        new("User", studentClaims.User),
                        new("Birth", studentClaims.Birth.ToString()),
                        new("Gender", studentClaims.Gender),
                        new("Character_Id", studentClaims.Character_Id.ToString()),
                        new("Preference_Sound", soundPreference ? "1" : "0"),
                        new("Preference_Vibration", vibrationPreference ? "1" : "0")
                    }
                )
            };

            var token = _tokenHandler.CreateToken(securityTokenDescriptor);

            return _tokenHandler.WriteToken(token);
        }

        public StudentClaimsModel Read(string token)
        {
            IEnumerable<Claim> claims = Validate(token).Claims;

            string GetClaimValue(string type) =>
                claims.FirstOrDefault(p => p.Type == type)?.Value ?? "";

            int id = Convert.ToInt32(GetClaimValue("Id"));
            string name = GetClaimValue("Name");
            string email = GetClaimValue("Email");
            string user = GetClaimValue("User");
            DateOnly birth = DateOnly.Parse(GetClaimValue("Birth"));
            string gender = GetClaimValue("Gender");
            short characterId = Convert.ToInt16(GetClaimValue("Character_Id"));
            bool preferenceSound = GetClaimValue("Preference_Sound") == "1";
            bool preferenceVibration = GetClaimValue("Preference_Vibration") == "1";

            return new(
                id,
                name,
                email,
                user,
                birth,
                gender,
                characterId,
                preferenceSound,
                preferenceVibration
            );
        }
    }
}
