using TechTrip.Core.Configurations.Models;

namespace TechTrip.Core.Interfaces.Services
{
    public interface ITokenDomainService
    {
        string Generate(StudentClaimsModel studentClaims);
        StudentClaimsModel Read(string token);
    }
}
