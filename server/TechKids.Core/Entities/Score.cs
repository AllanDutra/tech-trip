﻿namespace TechKids.Core.Entities;

public partial class Score
{
    public short Id { get; set; }

    public short Stars { get; set; }

    public short Diamonds { get; set; }

    public DateTime? Date { get; set; }

    public int? StudentId { get; set; }

    public int? ChallengeId { get; set; }

    public virtual Challenge? Challenge { get; set; }

    public virtual Student? Student { get; set; }
}