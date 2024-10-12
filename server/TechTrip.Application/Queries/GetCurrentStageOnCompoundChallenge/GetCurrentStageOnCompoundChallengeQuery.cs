using MediatR;

namespace TechTrip.Application.Queries
{
    public class GetCurrentStageOnCompoundChallengeQuery : IRequest<int>
    {
        public GetCurrentStageOnCompoundChallengeQuery(int challenge_Id)
        {
            Challenge_Id = challenge_Id;
        }

        public int Challenge_Id { get; }
    }
}
