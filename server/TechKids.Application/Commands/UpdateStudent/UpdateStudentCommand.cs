using MediatR;
using TechKids.Core.Models.InputModels;

namespace TechKids.Application.Commands
{
    public class UpdateStudentCommand : StudentBaseInputModel, IRequest<Unit>
    {
        public int Id { get; set; }
    }
}
