using MediatR;
using TechKids.Core.Configurations;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Queries
{
    public class GetChallengesMapQueryHandler
        : IRequestHandler<GetChallengesMapQuery, List<ChallengesMapViewModel>>
    {
        private readonly IChallengeRepository _challengeRepository;

        public GetChallengesMapQueryHandler(IChallengeRepository challengeRepository)
        {
            _challengeRepository = challengeRepository;
        }

        public async Task<List<ChallengesMapViewModel>> Handle(
            GetChallengesMapQuery request,
            CancellationToken cancellationToken
        )
        {
            return await _challengeRepository.GetChallengesMapAsync(
                StudentAuthenticationSettings.Claims.Id
            );
        }
    }
}
