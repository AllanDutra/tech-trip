using System.Net;
using MediatR;
using TechKids.Core.Configurations;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Factories;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Application.Queries
{
    public class GetCurrentStageOnCompoundChallengeQueryHandler
        : IRequestHandler<GetCurrentStageOnCompoundChallengeQuery, int>
    {
        private readonly IScoreRepository _scoreRepository;
        private readonly IAttemptRepository _attemptRepository;
        private readonly IProcessAttemptDomainServiceAbstractFactory _processAttemptDomainServiceAbstractFactory;
        private readonly INotifier _notifier;

        public GetCurrentStageOnCompoundChallengeQueryHandler(
            IScoreRepository scoreRepository,
            IAttemptRepository attemptRepository,
            IProcessAttemptDomainServiceAbstractFactory processAttemptDomainServiceAbstractFactory,
            INotifier notifier
        )
        {
            _scoreRepository = scoreRepository;
            _attemptRepository = attemptRepository;
            _processAttemptDomainServiceAbstractFactory =
                processAttemptDomainServiceAbstractFactory;
            _notifier = notifier;
        }

        public async Task<int> Handle(
            GetCurrentStageOnCompoundChallengeQuery request,
            CancellationToken cancellationToken
        )
        {
            short? maxCompoundChallengeStages =
                _processAttemptDomainServiceAbstractFactory.GetMaxCompoundChallengeStages(
                    request.Challenge_Id
                );

            if (!maxCompoundChallengeStages.HasValue)
            {
                _notifier.Handle(
                    $"O desafio {request.Challenge_Id} não é composto.",
                    HttpStatusCode.BadRequest
                );

                return 0;
            }

            bool studentAlreadyScoredInChallenge =
                await _scoreRepository.StudentAlreadyScoredInTheChallengeAsync(
                    StudentAuthenticationSettings.Claims.Id,
                    request.Challenge_Id
                );

            if (studentAlreadyScoredInChallenge)
            {
                _notifier.Handle(
                    "Você já resolveu este desafio anteriormente.",
                    HttpStatusCode.Conflict
                );

                return 0;
            }

            Attempt? lastCompoundChallengeAttempt =
                await _attemptRepository.GetStudentLastCorrectAttemptForCompoundChallengeAsync(
                    StudentAuthenticationSettings.Claims.Id,
                    request.Challenge_Id
                );

            if (lastCompoundChallengeAttempt is null)
                return 1;

            return lastCompoundChallengeAttempt.Steps + 1;
        }
    }
}
