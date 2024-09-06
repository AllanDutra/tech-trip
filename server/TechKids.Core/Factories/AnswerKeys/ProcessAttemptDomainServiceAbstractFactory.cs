using TechKids.Core.Factories.AnswerKeys;
using TechKids.Core.Interfaces.Factories;

namespace TechKids.Core.Factories
{
    public class ProcessAttemptDomainServiceAbstractFactory
        : IProcessAttemptDomainServiceAbstractFactory
    {
        private readonly CalculateStarsBasedOnAttempts _calculateStarsBasedOnAttempts;

        public ProcessAttemptDomainServiceAbstractFactory(
            CalculateStarsBasedOnAttempts calculateStarsBasedOnAttempts
        )
        {
            _calculateStarsBasedOnAttempts = calculateStarsBasedOnAttempts;
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

                default:
                    throw new InvalidOperationException(
                        $"Processamento para o desafio {Challenge_Id} não encontrado ou não implementado."
                    );
            }
        }
    }
}
