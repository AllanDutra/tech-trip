namespace TechTrip.Core.Configurations.Models
{
    public class StudentClaimsModel
    {
        public StudentClaimsModel(
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
            Id = id;
            Name = name;
            Email = email;
            User = user;
            Birth = birth;
            Gender = gender;
            Character_Id = character_Id;
            Preference_Sound = preference_Sound;
            Preference_Vibration = preference_Vibration;
        }

        public int Id { get; }
        public string Name { get; }
        public string Email { get; }
        public string User { get; }
        public DateOnly? Birth { get; }
        public string? Gender { get; }
        public short? Character_Id { get; }
        public bool? Preference_Sound { get; }
        public bool? Preference_Vibration { get; }
    }
}
