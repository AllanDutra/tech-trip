using System.Net;
using MediatR;
using TechTrip.Core.Configurations;
using TechTrip.Core.Configurations.Models;
using TechTrip.Core.Entities;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Application.Queries
{
    public class GetStudentClaimsQueryHandler
        : IRequestHandler<GetStudentClaimsQuery, StudentClaimsModel?>
    {
        private readonly IStudentRepository _studentRepository;
        private readonly IPreferenceRepository _preferenceRepository;
        private readonly INotifier _notifier;

        public GetStudentClaimsQueryHandler(
            IStudentRepository studentRepository,
            INotifier notifier,
            IPreferenceRepository preferenceRepository
        )
        {
            _studentRepository = studentRepository;
            _notifier = notifier;
            _preferenceRepository = preferenceRepository;
        }

        public async Task<StudentClaimsModel?> Handle(
            GetStudentClaimsQuery request,
            CancellationToken cancellationToken
        )
        {
            Student? student = await _studentRepository.GetStudentByIdAsync(
                StudentAuthenticationSettings.Claims.Id
            );

            if (student == null)
            {
                _notifier.Handle("Dados do estudante não encontrados!", HttpStatusCode.NotFound);

                return null;
            }

            Preference? preference = await _preferenceRepository.GetPreferenceByStudentIdAsync(
                student.Id
            );

            return new StudentClaimsModel(
                student.Id,
                student.Name,
                student.Email,
                student.User,
                student.Birth,
                student.Gender,
                student.CharacterId,
                preference?.Sound ?? false,
                preference?.Vibration ?? false
            );
        }
    }
}
