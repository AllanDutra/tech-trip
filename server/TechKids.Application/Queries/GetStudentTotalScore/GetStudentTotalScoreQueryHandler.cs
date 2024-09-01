using MediatR;
using TechKids.Core.Configurations;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Queries
{
    public class GetStudentTotalScoreQueryHandler
        : IRequestHandler<GetStudentTotalScoreQuery, StudentTotalScoreViewModel>
    {
        private readonly IScoreRepository _scoreRepository;

        public GetStudentTotalScoreQueryHandler(IScoreRepository scoreRepository)
        {
            _scoreRepository = scoreRepository;
        }

        public async Task<StudentTotalScoreViewModel> Handle(
            GetStudentTotalScoreQuery request,
            CancellationToken cancellationToken
        )
        {
            return await _scoreRepository.GetStudentTotalScoreAsync(
                StudentAuthenticationSettings.Claims.Id
            );
        }
    }
}
