using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
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

                var token = context
                    .Request.Headers.Authorization.ToString()
                    .Replace("Bearer ", "")
                    .Trim();

                if (!string.IsNullOrEmpty(token))
                {
                    var Validate = handler.ValidateToken(token, validations, out var tokenSecure);

                    var claimsToCopy = new string[]
                    {
                        "Id",
                        "Name",
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

                    int id = Convert.ToInt32(context.Items["Id"]);
                    string name = context.Items["Name"] + "" ?? "";
                    short characterId = Convert.ToInt16(context.Items["Character_Id"]);
                    bool preferenceSound = context.Items["Preference_Sound"] + "" == "1";
                    bool preferenceVibration = context.Items["Preference_Vibration"] + "" == "1";

                    StudentAuthenticationSettings.Set(
                        id,
                        name,
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
