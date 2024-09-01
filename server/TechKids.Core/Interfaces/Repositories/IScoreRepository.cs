using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Interfaces.Repositories
{
    public interface IScoreRepository
    {
        Task<StudentTotalScoreViewModel> GetStudentTotalScoreAsync(int Student_Id);
    }
}
