namespace TechTrip.Core.Entities;

public partial class Attempt
{
    public Attempt(
        bool correct,
        short steps,
        DateTime? date,
        string? studentResponse,
        int? studentId,
        int? challengeId
    )
    {
        Correct = correct;
        Steps = steps;
        Date = date;
        StudentResponse = studentResponse;
        StudentId = studentId;
        ChallengeId = challengeId;
    }

    public short Id { get; set; }

    public bool Correct { get; set; }

    public short Steps { get; set; }

    public DateTime? Date { get; set; }

    public string? StudentResponse { get; set; }

    public int? StudentId { get; set; }

    public int? ChallengeId { get; set; }

    public virtual Challenge? Challenge { get; set; }

    public virtual Student? Student { get; set; }
}
