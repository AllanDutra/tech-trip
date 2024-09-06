namespace TechKids.Core.Interfaces.Factories
{
    public interface IProcessAttemptDomainServiceAbstractFactory
    {
        short? GetMarginOfError(int Challenge_Id);
        IProcessAttemptDomainService GetService(int Challenge_Id);
    }
}
