using FluentValidation;
using TechTrip.Application.Commands;
using TechTrip.Shared.Utils;

namespace TechTrip.Application.Validators
{
    public class UpdateStudentPasswordCommandValidator
        : AbstractValidator<UpdateStudentPasswordCommand>
    {
        public UpdateStudentPasswordCommandValidator()
        {
            RuleFor(p => p.CurrentPassword)
                .NotNull()
                .NotEmpty()
                .WithMessage("A senha atual precisa ser informada.");

            RuleFor(p => p.NewPassword)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe uma nova senha!")
                .Must(password => !Validations.ContainsSpaces(password))
                .WithMessage("A senha não pode conter espaços.");
        }
    }
}
