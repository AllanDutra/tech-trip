using MediatR;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
{
    public class GetStudentTotalScoreQuery : IRequest<StudentTotalScoreViewModel> { }
}
