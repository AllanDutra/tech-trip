using MediatR;
using TechTrip.Core.Configurations;
using TechTrip.Core.Interfaces.Repositories;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
{
    public class GetStudentProgressQueryHandler
        : IRequestHandler<GetStudentProgressQuery, ProgressViewModel>
    {
        private readonly IChallengeRepository _challengeRepository;

        public GetStudentProgressQueryHandler(IChallengeRepository challengeRepository)
        {
            _challengeRepository = challengeRepository;
        }

        public async Task<ProgressViewModel> Handle(
            GetStudentProgressQuery request,
            CancellationToken cancellationToken
        )
        {
            int totalChallenges = await _challengeRepository.GetTotalChallengesAsync();

            int totalSolvedChallenges = await _challengeRepository.GetTotalSolvedChallengesAsync(
                StudentAuthenticationSettings.Claims.Id
            );

            int percentProgress = (int)
                Math.Round(totalSolvedChallenges / (decimal)totalChallenges * 100m);

            return new ProgressViewModel(totalChallenges, totalSolvedChallenges, percentProgress);
        }
    }
}
