namespace TechTrip.Core.Entities;

public partial class Character
{
    public short Id { get; set; }

    public string Description { get; set; } = null!;

    public byte[] Image { get; set; } = null!;

    public virtual ICollection<Student> Students { get; } = new List<Student>();
}
