using System.Net;
using MediatR;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Application.Commands
{
    public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, Unit>
    {
        private readonly IStudentRepository _studentRepository;
        private readonly INotifier _notifier;

        public UpdateStudentCommandHandler(IStudentRepository studentRepository, INotifier notifier)
        {
            _studentRepository = studentRepository;
            _notifier = notifier;
        }

        public async Task<Unit> Handle(
            UpdateStudentCommand request,
            CancellationToken cancellationToken
        )
        {
            Student? student = await _studentRepository.GetStudentByIdAsync(request.Id);

            if (student == null)
            {
                _notifier.Handle(
                    $"Não foi encontrado nenhum estudante com o id {request.Id}",
                    HttpStatusCode.NotFound
                );

                return Unit.Value;
            }

            student.Name = request.Name;
            student.Email = request.Email;
            student.User = request.User;
            student.Birth = DateOnly.FromDateTime(request.Birth);
            student.Gender = request.Gender;
            student.CharacterId = request.Character_Id;

            await _studentRepository.UpdateStudentAsync(student);

            return Unit.Value;
        }
    }
}
