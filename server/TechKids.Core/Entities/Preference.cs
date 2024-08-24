namespace TechKids.Core.Entities;

public partial class Preference
{
    public short Id { get; set; }

    public bool? Sound { get; set; }

    public bool? Vibration { get; set; }

    public int? StudentId { get; set; }

    public virtual Student? Student { get; set; }
}
