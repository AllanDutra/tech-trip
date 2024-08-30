using MediatR;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Application.Commands
{
    public class UpdateStudentPasswordCommandHandler
        : IRequestHandler<UpdateStudentPasswordCommand, Unit>
    {
        private readonly IStudentRepository _studentRepository;

        public UpdateStudentPasswordCommandHandler(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<Unit> Handle(
            UpdateStudentPasswordCommand request,
            CancellationToken cancellationToken
        )
        {
            Student? student = await _studentRepository.GetStudentByIdAsync(request.Id);

            if (student == null)
            {
                // TODO: CONTINUE HERE
            }
        }
    }
}
