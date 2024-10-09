using System.Net.Mail;
using System.Text.RegularExpressions;

namespace TechTrip.Shared.Utils
{
    public static partial class Validations
    {
        private static readonly List<string> AcceptedGendersOptions = new() { "male", "female" };

        public static bool IsValidEmail(string? email)
        {
            if (string.IsNullOrEmpty(email))
                return false;

            try
            {
                MailAddress mail = new(email);

                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        public static bool IsValidUsername(string? user)
        {
            if (string.IsNullOrEmpty(user))
                return false;

            Regex usernameRegex = UsernameRegex();

            return usernameRegex.IsMatch(user);
        }

        public static bool IsValidGender(string? gender)
        {
            if (gender == null)
                return false;

            return AcceptedGendersOptions.Contains(gender.ToLower());
        }

        public static bool ContainsSpaces(string? text)
        {
            if (string.IsNullOrEmpty(text))
                return false;

            return text.Contains(' ');
        }

        [GeneratedRegex("^(?=[a-zA-Z0-9._]{8,50}$)(?!.*[_.]{2})[^_.].*[^_.]$")]
        private static partial Regex UsernameRegex();
    }
}
