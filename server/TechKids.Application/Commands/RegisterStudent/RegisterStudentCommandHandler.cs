using System.Net;
using MediatR;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Interfaces.Services;

namespace TechKids.Application.Commands
{
    public class RegisterStudentCommandHandler : IRequestHandler<RegisterStudentCommand, int>
    {
        private readonly ICryptoDomainService _cryptoDomainService;
        private readonly IUnitOfWork _unitOfWork;
        private readonly INotifier _notifier;

        public RegisterStudentCommandHandler(
            ICryptoDomainService cryptoDomainService,
            IUnitOfWork unitOfWork,
            INotifier notifier
        )
        {
            _cryptoDomainService = cryptoDomainService;
            _unitOfWork = unitOfWork;
            _notifier = notifier;
        }

        public async Task<int> Handle(
            RegisterStudentCommand request,
            CancellationToken cancellationToken
        )
        {
            bool emailAlreadyUsed = await _unitOfWork.Students.EmailAlreadyUsedAsync(request.Email);

            if (emailAlreadyUsed)
            {
                _notifier.Handle(
                    "O e-mail informado já está sendo utilizado por outro usuário!",
                    HttpStatusCode.Conflict
                );

                return 0;
            }

            bool userNameAlreadyUsed = await _unitOfWork.Students.UsernameAlreadyUsedAsync(
                request.User
            );

            if (userNameAlreadyUsed)
            {
                _notifier.Handle(
                    "O nome de usuário informado já está sendo utilizado!",
                    HttpStatusCode.Conflict
                );

                return 0;
            }

            bool characterExists = await _unitOfWork.Characters.CharacterExistsAsync(
                request.Character_Id
            );

            if (!characterExists)
            {
                _notifier.Handle(
                    $"Não foi encontrado personagem com o id informado ({request.Character_Id})!",
                    HttpStatusCode.NotFound
                );

                return 0;
            }

            string salt = _cryptoDomainService.GenerateSalt();

            string hashPassword = _cryptoDomainService.GetHash(request.Password, salt);

            Student student =
                new(
                    request.Name,
                    request.Email,
                    request.User,
                    hashPassword,
                    salt,
                    DateOnly.FromDateTime(request.Birth),
                    request.Gender.ToLower(),
                    request.Character_Id
                );

            try
            {
                await _unitOfWork.BeginTransactionAsync();

                int Student_Id = await _unitOfWork.Students.RegisterStudentAsync(student);

                Preference preference = new(true, true, Student_Id);

                await _unitOfWork.Preferences.RegisterStudentPreferenceAsync(preference);

                await _unitOfWork.CommitAsync();

                return Student_Id;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
