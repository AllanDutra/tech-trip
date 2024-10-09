using TechTrip.Core.Configurations.Models;

namespace TechTrip.Core.Models.ViewModels
{
    public class StudentAuthenticationViewModel
    {
        public StudentAuthenticationViewModel(string token, StudentClaimsModel claims)
        {
            Token = token;
            Claims = claims;
        }

        public string Token { get; }
        public StudentClaimsModel Claims { get; }
    }
}
