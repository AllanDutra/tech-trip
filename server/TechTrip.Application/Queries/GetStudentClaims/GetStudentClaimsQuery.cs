using MediatR;
using TechTrip.Core.Configurations.Models;

namespace TechTrip.Application.Queries
{
    public class GetStudentClaimsQuery : IRequest<StudentClaimsModel?> { }
}
