using TechKids.Core.Entities;

namespace TechKids.Core.Interfaces.Repositories
{
    public interface IStudentRepository
    {
        Task<bool> EmailAlreadyUsedAsync(string email);
        Task<bool> UsernameAlreadyUsedAsync(string user);
        Task<int> RegisterStudentAsync(Student student);
    }
}
