using FluentValidation;
using TechKids.Application.Commands;

namespace TechKids.Application.Validators
{
    public class UpdateStudentCommandValidator : StudentBaseValidator<UpdateStudentCommand>
    {
        public UpdateStudentCommandValidator()
        {
            RuleFor(p => p.Id)
                .NotNull()
                .NotEmpty()
                .WithMessage("O id do estudante é obrigatório para realizar sua edição.");

            RuleFor(p => p.Preference_Sound)
                .NotNull()
                .WithMessage("A preferência de som deve ser informada.");

            RuleFor(p => p.Preference_Vibration)
                .NotNull()
                .WithMessage("A preferência de vibração deve ser informada.");
        }
    }
}
