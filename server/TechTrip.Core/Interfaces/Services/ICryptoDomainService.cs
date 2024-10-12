namespace TechTrip.Core.Interfaces.Services
{
    public interface ICryptoDomainService
    {
        string GenerateSalt();
        string GetHash(string plainPassword, string salt);
        bool CompareHashedPasswords(string inputPassword, string existingHashPassword, string salt);
    }
}
