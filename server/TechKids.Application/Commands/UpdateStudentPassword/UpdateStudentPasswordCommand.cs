using MediatR;

namespace TechKids.Application.Commands
{
    public class UpdateStudentPasswordCommand : IRequest<Unit>
    {
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
