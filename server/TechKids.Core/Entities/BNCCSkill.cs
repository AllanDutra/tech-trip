namespace TechKids.Core.Entities;

public partial class BNCCSkill
{
    public short Id { get; set; }

    public string SkillName { get; set; } = null!;

    public string? Description { get; set; }

    public int? ChallengeId { get; set; }

    public virtual Challenge? Challenge { get; set; }
}
