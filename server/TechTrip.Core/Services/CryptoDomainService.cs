using System.Security.Cryptography;
using System.Text;
using TechTrip.Core.Interfaces.Services;

namespace TechTrip.Core.Services
{
    public class CryptoDomainService : ICryptoDomainService
    {
        public string GenerateSalt()
        {
            byte[] randomBytes = new byte[32];

            using RandomNumberGenerator randomNumberGenerator = RandomNumberGenerator.Create();

            randomNumberGenerator.GetBytes(randomBytes);

            return Convert.ToBase64String(randomBytes);
        }

        public string GetHash(string plainPassword, string salt)
        {
            var byteArray = Encoding.Unicode.GetBytes(string.Concat(salt, plainPassword));

            var sha256 = SHA256.Create();

            var randomBytes = sha256.ComputeHash(byteArray);

            return Convert.ToBase64String(randomBytes);
        }

        public bool CompareHashedPasswords(
            string inputPassword,
            string existingHashPassword,
            string salt
        )
        {
            string inputtedHashedPassword = GetHash(inputPassword, salt);

            return inputtedHashedPassword == existingHashPassword;
        }
    }
}
