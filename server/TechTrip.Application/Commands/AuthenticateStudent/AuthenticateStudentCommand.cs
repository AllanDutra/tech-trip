using MediatR;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Commands
{
    public class AuthenticateStudentCommand : IRequest<StudentAuthenticationViewModel?>
    {
        public string User { get; set; }
        public string Password { get; set; }
    }
}