using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    [ProducesResponseType(typeof(DefaultResponseViewModel), 401)]
    [ProducesResponseType(typeof(DefaultResponseViewModel), 500)]
    public class MainController : ControllerBase
    {
        protected readonly INotifier _notifier;
        protected readonly IMediator _mediator;

        public MainController(INotifier notifier, IMediator mediator)
        {
            _notifier = notifier;
            _mediator = mediator;
        }

        protected ActionResult PersonalizedResponse(ActionResult actionResult)
        {
            if (ValidOperation())
                return actionResult;

            var notification = _notifier.GetNotifications().First();

            Response.StatusCode = (int)notification.StatusCode;

            return new JsonResult(new DefaultResponseViewModel(notification.Message));
        }

        private bool ValidOperation() => !_notifier.HasNotification();
    }
}
