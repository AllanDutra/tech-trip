using MediatR;
using Microsoft.AspNetCore.Mvc;
using TechTrip.Application.Commands;
using TechTrip.Application.Queries;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.API.Controllers
{
    [ApiController]
    [Route("api/challenges")]
    public class ChallengesController : MainController
    {
        public ChallengesController(INotifier notifier, IMediator mediator)
            : base(notifier, mediator) { }

        /// <summary>
        /// Get map challenges or student resume with student trajectory
        /// </summary>
        /// <returns></returns>
        [HttpGet("map")]
        [ProducesResponseType(typeof(List<ChallengesMapViewModel>), 200)]
        public async Task<IActionResult> GetChallengesMapAsync()
        {
            GetChallengesMapQuery query = new();

            List<ChallengesMapViewModel> challengesMap = await _mediator.Send(query);

            return PersonalizedResponse(Ok(challengesMap));
        }

        /// <summary>
        /// Get the student percent progress as int
        /// </summary>
        /// <returns></returns>
        [HttpGet("progress")]
        [ProducesResponseType(typeof(ProgressViewModel), 200)]
        public async Task<IActionResult> GetStudentProgressAsync()
        {
            GetStudentProgressQuery query = new();

            ProgressViewModel studentProgress = await _mediator.Send(query);

            return PersonalizedResponse(Ok(studentProgress));
        }

        /// <summary>
        /// Get the current stage on compound challenge
        /// </summary>
        /// <param name="id">Challenge id</param>
        /// <returns></returns>
        [HttpGet("compounds/current-stage/{id}")]
        [ProducesResponseType(typeof(int), 200)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 400)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 409)]
        public async Task<IActionResult> GetCurrentStageOnCompoundChallengeAsync([FromRoute] int id)
        {
            GetCurrentStageOnCompoundChallengeQuery query = new(id);

            int currentStage = await _mediator.Send(query);

            return PersonalizedResponse(Ok(currentStage));
        }

        /// <summary>
        /// Process the attempt for a challenge and returns total score earned by student or a message
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [HttpPost("process-attempt")]
        [ProducesResponseType(typeof(ProcessedAttemptForChallengeProductViewModel), 200)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 400)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 404)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 409)]
        public async Task<IActionResult> ProcessAttemptForChallengeAsync(
            [FromBody] ProcessAttemptForChallengeCommand command
        )
        {
            ProcessedAttemptForChallengeProductViewModel? processedResponse = await _mediator.Send(
                command
            );

            return PersonalizedResponse(Ok(processedResponse));
        }
    }
}
