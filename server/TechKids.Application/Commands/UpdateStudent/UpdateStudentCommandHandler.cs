using System.Net;
using MediatR;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Shared.Utils;

namespace TechKids.Application.Commands
{
    public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, Unit>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly INotifier _notifier;

        public UpdateStudentCommandHandler(IUnitOfWork unitOfWork, INotifier notifier)
        {
            _unitOfWork = unitOfWork;
            _notifier = notifier;
        }

        public async Task<Unit> Handle(
            UpdateStudentCommand request,
            CancellationToken cancellationToken
        )
        {
            Student? student = await _unitOfWork.Students.GetStudentByIdAsync(
                StudentAuthenticationSettings.Claims.Id
            );

            if (student == null)
            {
                _notifier.Handle(
                    $"Não foi encontrado nenhum estudante com o id {StudentAuthenticationSettings.Claims.Id}",
                    HttpStatusCode.NotFound
                );

                return Unit.Value;
            }

            Preference? preference = await _unitOfWork.Preferences.GetPreferenceByStudentIdAsync(
                student.Id
            );

            if (preference == null)
            {
                _notifier.Handle(
                    $"Não foi encontrada nenhuma preferência para o estudante com o id {StudentAuthenticationSettings.Claims.Id}",
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

            preference.Sound = request.Preference_Sound;
            preference.Vibration = request.Preference_Vibration;

            try
            {
                await _unitOfWork.BeginTransactionAsync();

                await _unitOfWork.Students.UpdateStudentAsync(student);

                await _unitOfWork.Preferences.UpdateStudentPreferenceAsync(preference);

                await _unitOfWork.CommitAsync();

                return Unit.Value;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
