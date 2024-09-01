using MediatR;
using TechKids.Core.Configurations;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Application.Queries
{
    public class GetStudentProgressQueryHandler : IRequestHandler<GetStudentProgressQuery, int>
    {
        private readonly IChallengeRepository _challengeRepository;

        public GetStudentProgressQueryHandler(IChallengeRepository challengeRepository)
        {
            _challengeRepository = challengeRepository;
        }

        public async Task<int> Handle(
            GetStudentProgressQuery request,
            CancellationToken cancellationToken
        )
        {
            int totalChallenges = await _challengeRepository.GetTotalChallengesAsync();

            int totalSolvedChallenges = await _challengeRepository.GetTotalSolvedChallengesAsync(
                StudentAuthenticationSettings.Claims.Id
            );

            return (int)Math.Round(totalSolvedChallenges / totalChallenges * 100.00m);
        }
    }
}
