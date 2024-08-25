using System.Net;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Interfaces.Notifications
{
    public interface INotifier
    {
        void ClearNotification();
        bool HasNotification();
        List<NotificationViewModel> GetNotifications();
        void Handle(string message, HttpStatusCode statusCode);
    }
}
