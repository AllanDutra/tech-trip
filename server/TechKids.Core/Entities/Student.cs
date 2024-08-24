namespace TechKids.Core.Entities;

public partial class Student
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string User { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Salt { get; set; } = null!;

    public DateOnly? Birth { get; set; }

    public string? Gender { get; set; }

    public short? CharacterId { get; set; }

    public virtual ICollection<Attempt> Attempts { get; } = new List<Attempt>();

    public virtual Character? Character { get; set; }

    public virtual ICollection<Preference> Preferences { get; } = new List<Preference>();

    public virtual ICollection<Score> Scores { get; } = new List<Score>();
}
