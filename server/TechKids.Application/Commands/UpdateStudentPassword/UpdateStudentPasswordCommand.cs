using MediatR;

namespace TechKids.Application.Commands
{
    public class UpdateStudentPasswordCommand : IRequest<Unit>
    {
        public int Id { get; set; }
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
