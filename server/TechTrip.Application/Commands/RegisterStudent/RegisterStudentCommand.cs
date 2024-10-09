using MediatR;
using TechTrip.Core.Models.InputModels;

namespace TechTrip.Application.Commands
{
    public class RegisterStudentCommand : StudentBaseInputModel, IRequest<int>
    {
        public string Password { get; set; }
    }
}
