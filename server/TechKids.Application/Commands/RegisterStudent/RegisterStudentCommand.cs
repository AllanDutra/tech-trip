using MediatR;

namespace TechKids.Application.Commands
{
    public class RegisterStudentCommand : IRequest<int>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public DateTime Birth { get; set; }
        public string Gender { get; set; }
        public short Character_Id { get; set; }
    }
}
