using MediatR;
using TechTrip.Core.Configurations;
using TechTrip.Core.Interfaces.Repositories;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
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
