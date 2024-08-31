using TechKids.Core.Configurations.Models;

namespace TechKids.Core.Interfaces.Services
{
    public interface ITokenDomainService
    {
        string Generate(StudentClaimsModel studentClaims);
        StudentClaimsModel Read(string token);
    }
}
