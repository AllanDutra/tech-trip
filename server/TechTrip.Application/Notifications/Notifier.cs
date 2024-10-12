using System.Net;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Notifications
{
    public class Notifier : INotifier
    {
        private readonly List<NotificationViewModel> _notifications;

        public Notifier() => _notifications = new List<NotificationViewModel>();

        public void Handle(string message, HttpStatusCode statusCode)
        {
            NotificationViewModel notification = new(message, statusCode);

            _notifications.Add(notification);
        }

        public void ClearNotification()
        {
            if (_notifications.Any())
                _notifications.Clear();
        }

        public List<NotificationViewModel> GetNotifications() => _notifications;

        public bool HasNotification() => _notifications.Any();
    }
}
