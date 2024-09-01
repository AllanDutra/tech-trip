using TechKids.Core.Configurations.Models;

namespace TechKids.Core.Configurations
{
    public static class StudentAuthenticationSettings
    {
        public static StudentClaimsModel Claims { get; set; }

        public static void Set(
            int id,
            string name,
            string email,
            string user,
            DateOnly? birth,
            string? gender,
            short? character_Id,
            bool? preference_Sound,
            bool? preference_Vibration
        )
        {
            Claims = new StudentClaimsModel(
                id,
                name,
                email,
                user,
                birth,
                gender,
                character_Id,
                preference_Sound,
                preference_Vibration
            );
        }

        public static void Reset()
        {
            Claims = null;
        }
    }
}
