using System.Net;
using MediatR;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Core.Interfaces.Services;

namespace TechKids.Application.Commands
{
    public class UpdateStudentPasswordCommandHandler
        : IRequestHandler<UpdateStudentPasswordCommand, Unit>
    {
        private readonly IStudentRepository _studentRepository;
        private readonly INotifier _notifier;
        private readonly ICryptoDomainService _cryptoDomainService;

        public UpdateStudentPasswordCommandHandler(
            IStudentRepository studentRepository,
            INotifier notifier,
            ICryptoDomainService cryptoDomainService
        )
        {
            _studentRepository = studentRepository;
            _notifier = notifier;
            _cryptoDomainService = cryptoDomainService;
        }

        public async Task<Unit> Handle(
            UpdateStudentPasswordCommand request,
            CancellationToken cancellationToken
        )
        {
            Student? student = await _studentRepository.GetStudentByIdAsync(request.Id);

            if (student == null)
            {
                _notifier.Handle(
                    $"Não foi encontrado nenhum estudante com o id {request.Id}.",
                    HttpStatusCode.NotFound
                );

                return Unit.Value;
            }

            bool passwordsMatch = _cryptoDomainService.CompareHashedPasswords(
                request.CurrentPassword,
                student.Password,
                student.Salt
            );

            if (!passwordsMatch)
            {
                _notifier.Handle("Senha atual inválida.", HttpStatusCode.Unauthorized);

                return Unit.Value;
            }

            string newSalt = _cryptoDomainService.GenerateSalt();
            string newHashedPassword = _cryptoDomainService.GetHash(request.NewPassword, newSalt);

            student.Salt = newSalt;
            student.Password = newHashedPassword;

            await _studentRepository.UpdateStudentAsync(student);

            return Unit.Value;
        }
    }
}
