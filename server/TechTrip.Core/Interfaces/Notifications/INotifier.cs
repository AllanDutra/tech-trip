using System.Net;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Core.Interfaces.Notifications
{
    public interface INotifier
    {
        void ClearNotification();
        bool HasNotification();
        List<NotificationViewModel> GetNotifications();
        void Handle(string message, HttpStatusCode statusCode);
    }
}
