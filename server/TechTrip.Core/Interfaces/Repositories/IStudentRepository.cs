using TechTrip.Core.Entities;

namespace TechTrip.Core.Interfaces.Repositories
{
    public interface IStudentRepository
    {
        Task<bool> EmailAlreadyUsedAsync(string email);
        Task<bool> UsernameAlreadyUsedAsync(string user);
        Task<int> RegisterStudentAsync(Student student);
        Task<Student?> GetStudentByIdAsync(int id);
        Task<Student?> GetStudentByUserAsync(string user);
        Task UpdateStudentAsync(Student student);
    }
}
