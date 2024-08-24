namespace TechKids.Core.Entities;

public partial class AnswerKey
{
    public short Id { get; set; }

    public string Response { get; set; } = null!;

    public string? ResponsePattern { get; set; }

    public string? Help { get; set; }

    public int? ChallengeId { get; set; }

    public virtual Challenge? Challenge { get; set; }
}
