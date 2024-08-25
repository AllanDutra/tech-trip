using Microsoft.AspNetCore.Mvc;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.ViewModels;

namespace TechKids.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MainController : ControllerBase
    {
        protected readonly INotifier _notifier;

        public MainController(INotifier notifier)
        {
            _notifier = notifier;
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
