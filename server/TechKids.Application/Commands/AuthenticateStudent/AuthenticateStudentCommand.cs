using MediatR;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Commands
{
    public class AuthenticateStudentCommand : IRequest<StudentAuthenticationViewModel?>
    {
        public string User { get; set; }
        public string Password { get; set; }
    }
}