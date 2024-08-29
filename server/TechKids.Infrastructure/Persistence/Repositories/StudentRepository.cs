using Microsoft.EntityFrameworkCore;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public StudentRepository(TechKidsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> EmailAlreadyUsedAsync(string email)
        {
            return await _dbContext.Students.AnyAsync(student => student.Email == email);
        }

        public async Task<bool> UsernameAlreadyUsedAsync(string user)
        {
            return await _dbContext.Students.AnyAsync(student => student.User == user);
        }

        public async Task<int> RegisterStudentAsync(Student student)
        {
            await _dbContext.Students.AddAsync(student);

            await _dbContext.SaveChangesAsync();

            return student.Id;
        }

        public async Task<Student?> GetStudentByIdAsync(int id)
        {
            return await _dbContext.Students.FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task UpdateStudentAsync(Student student)
        {
            _dbContext.Students.Update(student);

            await _dbContext.SaveChangesAsync();
        }
    }
}
