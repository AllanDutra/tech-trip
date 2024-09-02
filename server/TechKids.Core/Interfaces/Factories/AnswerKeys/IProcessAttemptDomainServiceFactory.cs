namespace TechKids.Core.Interfaces.Factories
{
    public interface IProcessAttemptDomainServiceFactory
    {
        IProcessAttemptDomainService GetService(int Challenge_Id);
    }
}
