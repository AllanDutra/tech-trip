using TechTrip.Core.Factories.AnswerKeys;
using TechTrip.Core.Interfaces.Factories;

namespace TechTrip.Core.Factories
{
    public class ProcessAttemptDomainServiceAbstractFactory
        : IProcessAttemptDomainServiceAbstractFactory
    {
        private readonly CalculateStarsBasedOnAttempts _calculateStarsBasedOnAttempts;
        private readonly CalculateStarsBasedOnSteps _calculateStarsBasedOnSteps;
        private readonly CalculateStarsBasedOnAttemptsToWin _calculateStarsBasedOnAttemptsToWin;
        private readonly CalculateStarsBasedOnCompoundChallenge _calculateStarsBasedOnCompoundChallenge;

        public ProcessAttemptDomainServiceAbstractFactory(
            CalculateStarsBasedOnAttempts calculateStarsBasedOnAttempts,
            CalculateStarsBasedOnSteps calculateStarsBasedOnSteps,
            CalculateStarsBasedOnAttemptsToWin calculateStarsBasedOnAttemptsToWin,
            CalculateStarsBasedOnCompoundChallenge calculateStarsBasedOnCompoundChallenge
        )
        {
            _calculateStarsBasedOnAttempts = calculateStarsBasedOnAttempts;
            _calculateStarsBasedOnSteps = calculateStarsBasedOnSteps;
            _calculateStarsBasedOnAttemptsToWin = calculateStarsBasedOnAttemptsToWin;
            _calculateStarsBasedOnCompoundChallenge = calculateStarsBasedOnCompoundChallenge;
        }

        public short? GetMaxCompoundChallengeStages(int Challenge_Id)
        {
            switch (Challenge_Id)
            {
                case 13:
                    return 3;
                default:
                    return null;
            }
        }

        public short? GetMarginOfError(int Challenge_Id)
        {
            switch (Challenge_Id)
            {
                case 2:
                    return 3;
                case 6:
                    return 2;
                case 13:
                    return 2;
                default:
                    return null;
            }
        }

        public IProcessAttemptDomainService GetService(int Challenge_Id)
        {
            var services = new Dictionary<int, IProcessAttemptDomainService>
            {
                { 1, _calculateStarsBasedOnAttempts },
                { 2, _calculateStarsBasedOnSteps },
                { 3, _calculateStarsBasedOnAttempts },
                { 4, _calculateStarsBasedOnAttempts },
                { 5, _calculateStarsBasedOnSteps },
                { 6, _calculateStarsBasedOnAttemptsToWin },
                { 7, _calculateStarsBasedOnSteps },
                { 8, _calculateStarsBasedOnSteps },
                { 9, _calculateStarsBasedOnAttempts },
                { 10, _calculateStarsBasedOnAttempts },
                { 11, _calculateStarsBasedOnAttempts },
                { 12, _calculateStarsBasedOnAttempts },
                { 13, _calculateStarsBasedOnCompoundChallenge },
                { 14, _calculateStarsBasedOnSteps },
                { 15, _calculateStarsBasedOnAttempts },
            };

            if (services.TryGetValue(Challenge_Id, out var service))
            {
                return service;
            }

            throw new InvalidOperationException(
                $"Processamento para o desafio {Challenge_Id} não encontrado ou não implementado."
            );
        }
    }
}
