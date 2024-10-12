using MediatR;
using TechTrip.Core.Models.InputModels;

namespace TechTrip.Application.Commands
{
    public class UpdateStudentCommand : StudentBaseInputModel, IRequest<Unit>
    {
        public bool? Preference_Sound { get; set; }
        public bool? Preference_Vibration { get; set; }
    }
}
