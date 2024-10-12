namespace TechTrip.Core.Entities;

public partial class Challenge
{
    public int Id { get; set; }

    public string? Message { get; set; }

    public virtual ICollection<AnswerKey> AnswerKeys { get; } = new List<AnswerKey>();

    public virtual ICollection<Attempt> Attempts { get; } = new List<Attempt>();

    public virtual ICollection<BNCCSkill> BNCCSkills { get; } = new List<BNCCSkill>();

    public virtual ICollection<Score> Scores { get; } = new List<Score>();
}
