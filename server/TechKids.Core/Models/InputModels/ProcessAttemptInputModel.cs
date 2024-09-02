namespace TechKids.Core.Models.InputModels
{
    public class ProcessAttemptInputModel
    {
        public short Steps { get; set; }
        public string StudentResponse { get; set; }
        public int Challenge_Id { get; set; }
    }
}
