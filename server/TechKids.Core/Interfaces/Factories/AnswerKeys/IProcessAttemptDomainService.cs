using TechKids.Core.Models.InputModels;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Interfaces.Factories
{
    public interface IProcessAttemptDomainService
    {
        Task<ProcessedAttemptProductViewModel> ProcessAsync(ProcessAttemptInputModel inputModel);
    }
}
