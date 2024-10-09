using MediatR;
using TechTrip.Core.Interfaces.Repositories;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries.GetStudentsRanking
{
    public class GetStudentsRankingQueryHandler
        : IRequestHandler<GetStudentsRankingQuery, List<StudentRankingViewModel>>
    {
        private readonly IScoreRepository _scoreRepository;

        public GetStudentsRankingQueryHandler(IScoreRepository scoreRepository)
        {
            _scoreRepository = scoreRepository;
        }

        public async Task<List<StudentRankingViewModel>> Handle(
            GetStudentsRankingQuery request,
            CancellationToken cancellationToken
        )
        {
            return await _scoreRepository.GetStudentsRankingAsync();
        }
    }
}
