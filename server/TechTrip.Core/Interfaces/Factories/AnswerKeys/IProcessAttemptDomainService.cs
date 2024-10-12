using TechTrip.Core.Models.InputModels;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Core.Interfaces.Factories
{
    public interface IProcessAttemptDomainService
    {
        ProcessedAttemptProductViewModel? Process(ProcessAttemptInputModel inputModel);
    }
}
