using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TechTrip.Application.Commands;
using TechTrip.Application.Queries;
using TechTrip.Core.Configurations;
using TechTrip.Core.Configurations.Models;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.API.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentsController : MainController
    {
        public StudentsController(INotifier notifier, IMediator mediator)
            : base(notifier, mediator) { }

        /// <summary>
        /// Authenticate an existent student given a generated access token
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("authenticate")]
        [ProducesResponseType(typeof(StudentAuthenticationViewModel), 200)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 400)]
        public async Task<IActionResult> AuthenticateStudentAsync(
            [FromBody] AuthenticateStudentCommand command
        )
        {
            StudentAuthenticationViewModel? studentAuthentication = await _mediator.Send(command);

            return PersonalizedResponse(Ok(studentAuthentication));
        }

        /// <summary>
        /// Register a new Student with your default Preference
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost("register")]
        [ProducesResponseType(typeof(int), 200)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 400)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 404)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 409)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 500)]
        public async Task<IActionResult> RegisterStudentAsync(
            [FromBody] RegisterStudentCommand command
        )
        {
            int Student_Id = await _mediator.Send(command);

            return PersonalizedResponse(Ok(Student_Id));
        }

        /// <summary>
        /// Get student authenticated claims
        /// </summary>
        /// <returns></returns>
        [HttpGet("claims")]
        [ProducesResponseType(typeof(StudentClaimsModel), 200)]
        public async Task<IActionResult> ReadStudentClaims()
        {
            var query = new GetStudentClaimsQuery();

            var studentClaims = await _mediator.Send(query);

            return PersonalizedResponse(Ok(studentClaims));
        }

        /// <summary>
        /// Update a existent Student and your Preference
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [HttpPut("update")]
        [ProducesResponseType(typeof(void), 204)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 400)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 404)]
        public async Task<IActionResult> UpdateStudentAsync([FromBody] UpdateStudentCommand command)
        {
            await _mediator.Send(command);

            return PersonalizedResponse(NoContent());
        }

        /// <summary>
        /// Update the password of a existent Student
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [HttpPut("update-password")]
        [ProducesResponseType(typeof(void), 204)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 400)]
        [ProducesResponseType(typeof(DefaultResponseViewModel), 404)]
        public async Task<IActionResult> UpdateStudentPasswordAsync(
            [FromBody] UpdateStudentPasswordCommand command
        )
        {
            await _mediator.Send(command);

            return PersonalizedResponse(NoContent());
        }
    }
}
