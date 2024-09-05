using TechKids.Core.Factories.AnswerKeys;
using TechKids.Core.Interfaces.Factories;

namespace TechKids.Core.Factories
{
    public class ProcessAttemptDomainServiceFactory : IProcessAttemptDomainServiceFactory
    {
        private readonly ProcessAttempt1DomainService _processAttempt1DomainService;

        public ProcessAttemptDomainServiceFactory(
            ProcessAttempt1DomainService processAttempt1DomainService
        )
        {
            _processAttempt1DomainService = processAttempt1DomainService;
        }

        public IProcessAttemptDomainService GetService(int Challenge_Id)
        {
            switch (Challenge_Id)
            {
                case 1:
                    return _processAttempt1DomainService;

                default:
                    throw new InvalidOperationException(
                        $"Processamento para o desafio {Challenge_Id} não encontrado ou não implementado."
                    );
            }
        }
    }
}
