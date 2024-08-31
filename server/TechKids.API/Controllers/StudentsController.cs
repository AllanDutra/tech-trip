using MediatR;
using Microsoft.AspNetCore.Mvc;
using TechKids.Application.Commands;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.ViewModels;

namespace TechKids.API.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentsController : MainController
    {
        public StudentsController(INotifier notifier, IMediator mediator)
            : base(notifier, mediator) { }

        /// <summary>
        /// Register a new Student with your default Preference
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
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
        [ProducesResponseType(typeof(DefaultResponseViewModel), 401)]
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
