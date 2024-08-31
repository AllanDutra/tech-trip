using TechKids.Core.Configurations.Models;

namespace TechKids.Core.Configurations
{
    public static class StudentAuthenticationSettings
    {
        public static StudentClaimsModel Claims { get; set; }

        public static void Set(
            int id,
            string name,
            short characterId,
            bool preferenceSound,
            bool preferenceVibration
        )
        {
            Claims = new StudentClaimsModel(
                id,
                name,
                characterId,
                preferenceSound,
                preferenceVibration
            );
        }

        public static void Reset()
        {
            Claims = null;
        }
    }
}
