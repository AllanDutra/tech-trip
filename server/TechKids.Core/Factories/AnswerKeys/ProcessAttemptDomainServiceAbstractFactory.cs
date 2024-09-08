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
            switch (Challenge_Id)
            {
                case 1:
                    return _calculateStarsBasedOnAttempts;
                
                case 2:
                    return _calculateStarsBasedOnSteps;

                default:
                    throw new InvalidOperationException(
                        $"Processamento para o desafio {Challenge_Id} não encontrado ou não implementado."
                    );
            }
        }
    }
}
