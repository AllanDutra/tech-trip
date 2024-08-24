using TechKids.Core.Interfaces;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Notifications
{
    public class Notifier : INotifier
    {
        private readonly List<NotificationViewModel> _notifications;

        public Notifier() => _notifications = new List<NotificationViewModel>();

        public void Handle(NotificationViewModel notification) => _notifications.Add(notification);

        public void ClearNotification()
        {
            if (_notifications.Any())
                _notifications.Clear();
        }

        public List<NotificationViewModel> GetNotifications() => _notifications;

        public bool HasNotification() => _notifications.Any();
    }
}
