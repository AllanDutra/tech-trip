using System.Net;
using MediatR;
using TechTrip.Core.Configurations;
using TechTrip.Core.Entities;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Interfaces.Repositories;
using TechTrip.Core.Interfaces.Services;

namespace TechTrip.Application.Commands
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
            Student? student = await _studentRepository.GetStudentByIdAsync(
                StudentAuthenticationSettings.Claims.Id
            );

            if (student == null)
            {
                _notifier.Handle(
                    $"Não foi encontrado nenhum estudante com o id {StudentAuthenticationSettings.Claims.Id}.",
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
