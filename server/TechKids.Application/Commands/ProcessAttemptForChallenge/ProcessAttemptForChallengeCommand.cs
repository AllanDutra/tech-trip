using MediatR;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Commands
{
    public class ProcessAttemptForChallengeCommand
        : IRequest<ProcessedAttemptForChallengeProductViewModel?>
    {
        public short Steps { get; set; }
        public string StudentResponse { get; set; }
        public int Challenge_Id { get; set; }
    }
}
