using MediatR;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
{
    public class GetStudentProgressQuery : IRequest<ProgressViewModel> { }
}
