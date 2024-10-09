using MediatR;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Application.Queries
{
    public class GetChallengesMapQuery : IRequest<List<ChallengesMapViewModel>> { }
}
