using MediatR;
using TechKids.Core.Models.InputModels;

namespace TechKids.Application.Commands
{
    public class UpdateStudentCommand : StudentBaseInputModel, IRequest<Unit>
    {
        public int Id { get; set; }
        public bool? Preference_Sound { get; set; }
        public bool? Preference_Vibration { get; set; }
    }
}
