using MediatR;
using Microsoft.AspNetCore.Mvc;
using TechKids.Application.Queries;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.ViewModels;

namespace TechKids.API.Controllers
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
    }
}
