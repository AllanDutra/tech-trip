using MediatR;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Commands
{
    public class ProcessAttemptForChallengeCommand
        : IRequest<ProcessedAttemptForChallengeProductViewModel?>
    {
        public short Steps { get; set; }
        public string StudentResponse { get; set; }
        public int Challenge_Id { get; set; }
    }
}
