using TechKids.Core.Factories.AnswerKeys;
using TechKids.Core.Interfaces.Factories;

namespace TechKids.Core.Factories
{
    public class ProcessAttemptDomainServiceAbstractFactory
        : IProcessAttemptDomainServiceAbstractFactory
    {
        private readonly CalculateStarsBasedOnAttempts _calculateStarsBasedOnAttempts;
        private readonly CalculateStarsBasedOnSteps _calculateStarsBasedOnSteps;

        public ProcessAttemptDomainServiceAbstractFactory(
            CalculateStarsBasedOnAttempts calculateStarsBasedOnAttempts,
            CalculateStarsBasedOnSteps calculateStarsBasedOnSteps
        )
        {
            _calculateStarsBasedOnAttempts = calculateStarsBasedOnAttempts;
            _calculateStarsBasedOnSteps = calculateStarsBasedOnSteps;
        }

        public short? GetMarginOfError(int Challenge_Id)
        {
            switch (Challenge_Id)
            {
                case 2:
                    return 3;
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
