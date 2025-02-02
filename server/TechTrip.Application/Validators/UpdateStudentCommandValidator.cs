using FluentValidation;
using TechTrip.Application.Commands;

namespace TechTrip.Application.Validators
{
    public class UpdateStudentCommandValidator : StudentBaseValidator<UpdateStudentCommand>
    {
        public UpdateStudentCommandValidator()
        {
            RuleFor(p => p.Preference_Sound)
                .NotNull()
                .WithMessage("A preferência de som deve ser informada.");

            RuleFor(p => p.Preference_Vibration)
                .NotNull()
                .WithMessage("A preferência de vibração deve ser informada.");
        }
    }
}
