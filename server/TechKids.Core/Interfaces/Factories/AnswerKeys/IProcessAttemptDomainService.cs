using TechKids.Core.Models.InputModels;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Interfaces.Factories
{
    public interface IProcessAttemptDomainService
    {
        ProcessedAttemptProductViewModel? Process(ProcessAttemptInputModel inputModel);
    }
}
