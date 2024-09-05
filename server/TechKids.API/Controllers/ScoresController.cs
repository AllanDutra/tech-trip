using MediatR;
using Microsoft.AspNetCore.Mvc;
using TechKids.Application.Queries;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.ViewModels;

namespace TechKids.API.Controllers
{
    [ApiController]
    [Route("api/scores")]
    public class ScoresController : MainController
    {
        public ScoresController(INotifier notifier, IMediator mediator)
            : base(notifier, mediator) { }

        /// <summary>
        /// Get the total student's score in challenges (stars and diamonds numbers)
        /// </summary>
        /// <returns></returns>
        [HttpGet("total")]
        [ProducesResponseType(typeof(StudentTotalScoreViewModel), 200)]
        public async Task<IActionResult> GetStudentTotalScoreAsync()
        {
            GetStudentTotalScoreQuery query = new();

            StudentTotalScoreViewModel studentTotalScore = await _mediator.Send(query);

            return PersonalizedResponse(Ok(studentTotalScore));
        }

        /// <summary>
        /// Get the list of students classification based on your scores in the challenges
        /// </summary>
        /// <returns></returns>
        [HttpGet("ranking")]
        [ProducesResponseType(typeof(List<StudentRankingViewModel>), 200)]
        public async Task<IActionResult> GetStudentsRankingAsync()
        {
            GetStudentsRankingQuery query = new();

            List<StudentRankingViewModel> studentsRanking = await _mediator.Send(query);

            return PersonalizedResponse(Ok(studentsRanking));
        }
    }
}