using MediatR;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Queries
{
    public class GetStudentsRankingQuery : IRequest<List<StudentRankingViewModel>> { }
}
