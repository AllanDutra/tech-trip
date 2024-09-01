using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using TechKids.Core.Configurations;
using TechKids.Shared.Utils;

namespace TechKids.API.Middlewares
{
    public class StudentAuthenticationMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            if (!context.Response.HasStarted)
            {
                var endpoint = context.GetEndpoint();

                if (
                    endpoint != null
                    && !endpoint.Metadata.Any(p => p.GetType().Name == "AllowAnonymousAttribute")
                )
                {
                    HandleAuthentication(context);
                }

                await next(context);
            }
        }

        private static void HandleAuthentication(HttpContext context)
        {
            try
            {
                var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Settings.SecretKey));

                var handler = new JwtSecurityTokenHandler();
                var validations = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = key,
                    ValidateIssuer = false,
                    ValidateAudience = false
                };

                var token = context.Request.Headers.Authorization
                    .ToString()
                    .Replace("Bearer ", "")
                    .Trim();

                if (!string.IsNullOrEmpty(token))
                {
                    var Validate = handler.ValidateToken(token, validations, out var tokenSecure);

                    var claimsToCopy = new string[]
                    {
                        "Id",
                        "Name",
                        "Email",
                        "User",
                        "Birth",
                        "Gender",
                        "Character_Id",
                        "Preference_Sound",
                        "Preference_Vibration",
                        "exp",
                        "iat"
                    };

                    foreach (var claimType in claimsToCopy)
                    {
                        var claim = Validate.Claims.FirstOrDefault(p => p.Type == claimType);

                        if (claim != null)
                            context.Items.Add(claimType, claim.Value);
                    }

                    string GetItemValue(string type) => context.Items[type] + "";

                    int id = Convert.ToInt32(GetItemValue("Id"));
                    string name = GetItemValue("Name");
                    string email = GetItemValue("Email");
                    string user = GetItemValue("User");
                    DateOnly birth = DateOnly.Parse(GetItemValue("Birth"));
                    string gender = GetItemValue("Gender");
                    short characterId = Convert.ToInt16(GetItemValue("Character_Id"));
                    bool preferenceSound = GetItemValue("Preference_Sound") == "1";
                    bool preferenceVibration = GetItemValue("Preference_Vibration") == "1";

                    StudentAuthenticationSettings.Set(
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
                else
                {
                    StudentAuthenticationSettings.Reset();
                }
            }
            catch
            {
                StudentAuthenticationSettings.Reset();
            }
        }
    }
}
