using TechKids.Core.Interfaces.Factories;
using TechKids.Core.Models.InputModels;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Factories.AnswerKeys
{
    public class ProcessAttempt1DomainService : IProcessAttemptDomainService
    {
        public Task<ProcessedAttemptProductViewModel> ProcessAsync(
            ProcessAttemptInputModel inputModel
        )
        {
            throw new NotImplementedException();
        }
    }
}
