using MediatR;
using TechKids.Core.Models.InputModels;

namespace TechKids.Application.Commands
{
    public class RegisterStudentCommand : StudentBaseInputModel, IRequest<int>
    {
        public string Password { get; set; }
    }
}
