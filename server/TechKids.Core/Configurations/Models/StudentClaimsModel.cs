namespace TechKids.Core.Configurations.Models
{
    public class StudentClaimsModel
    {
        public StudentClaimsModel(
            int id,
            string name,
            short? character_Id,
            bool? preference_Sound,
            bool? preference_Vibration
        )
        {
            Id = id;
            Name = name;
            Character_Id = character_Id;
            Preference_Sound = preference_Sound;
            Preference_Vibration = preference_Vibration;
        }

        public int Id { get; }
        public string Name { get; }
        public short? Character_Id { get; }
        public bool? Preference_Sound { get; }
        public bool? Preference_Vibration { get; }
    }
}
