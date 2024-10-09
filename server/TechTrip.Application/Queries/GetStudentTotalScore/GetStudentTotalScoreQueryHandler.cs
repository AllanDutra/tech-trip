using MediatR;
using TechTrip.Core.Configurations;
using TechTrip.Core.Interfaces.Repositories;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
{
    public class GetStudentTotalScoreQueryHandler
        : IRequestHandler<GetStudentTotalScoreQuery, StudentTotalScoreViewModel>
    {
        private readonly IScoreRepository _scoreRepository;

        public GetStudentTotalScoreQueryHandler(IScoreRepository scoreRepository)
        {
            _scoreRepository = scoreRepository;
        }

        public async Task<StudentTotalScoreViewModel> Handle(
            GetStudentTotalScoreQuery request,
            CancellationToken cancellationToken
        )
        {
            return await _scoreRepository.GetStudentTotalScoreAsync(
                StudentAuthenticationSettings.Claims.Id
            );
        }
    }
}
