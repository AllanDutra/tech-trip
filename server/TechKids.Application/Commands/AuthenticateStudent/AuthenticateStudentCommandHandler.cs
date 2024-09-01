using System.Net;
using MediatR;
using TechKids.Core.Configurations.Models;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Core.Interfaces.Services;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Commands
{
    public class AuthenticateStudentCommandHandler
        : IRequestHandler<AuthenticateStudentCommand, StudentAuthenticationViewModel?>
    {
        private readonly IStudentRepository _studentRepository;
        private readonly IPreferenceRepository _preferenceRepository;
        private readonly ICryptoDomainService _cryptoDomainService;
        private readonly ITokenDomainService _tokenDomainService;
        private readonly INotifier _notifier;

        public AuthenticateStudentCommandHandler(
            IStudentRepository studentRepository,
            IPreferenceRepository preferenceRepository,
            ICryptoDomainService cryptoDomainService,
            ITokenDomainService tokenDomainService,
            INotifier notifier
        )
        {
            _studentRepository = studentRepository;
            _preferenceRepository = preferenceRepository;
            _cryptoDomainService = cryptoDomainService;
            _tokenDomainService = tokenDomainService;
            _notifier = notifier;
        }

        public async Task<StudentAuthenticationViewModel?> Handle(
            AuthenticateStudentCommand request,
            CancellationToken cancellationToken
        )
        {
            Student? student = await _studentRepository.GetStudentByUserAsync(request.User);

            if (student == null)
                return DefaultMessage();

            bool passwordsMatch = _cryptoDomainService.CompareHashedPasswords(
                request.Password,
                student.Password,
                student.Salt
            );

            if (!passwordsMatch)
                return DefaultMessage();

            Preference? preference = await _preferenceRepository.GetPreferenceByStudentIdAsync(
                student.Id
            );

            StudentClaimsModel claims =
                new(
                    student.Id,
                    student.Name,
                    student.Email,
                    student.User,
                    student.Birth,
                    student.Gender,
                    student.CharacterId,
                    preference?.Sound,
                    preference?.Vibration
                );

            string generatedToken = _tokenDomainService.Generate(claims);

            return new StudentAuthenticationViewModel(generatedToken, claims);
        }

        private StudentAuthenticationViewModel? DefaultMessage()
        {
            _notifier.Handle("Usuário ou senha inválidos.", HttpStatusCode.Unauthorized);

            return null;
        }
    }
}
