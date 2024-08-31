using TechKids.Core.Configurations.Models;

namespace TechKids.Core.Models.ViewModels
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
