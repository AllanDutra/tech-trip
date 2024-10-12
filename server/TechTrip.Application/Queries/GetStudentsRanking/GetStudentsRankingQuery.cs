using MediatR;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
{
    public class GetStudentsRankingQuery : IRequest<List<StudentRankingViewModel>> { }
}
