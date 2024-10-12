using FluentValidation;
using TechTrip.Application.Commands;
using TechTrip.Shared.Utils;

namespace TechTrip.Application.Validators
{
    public class RegisterStudentCommandValidator : StudentBaseValidator<RegisterStudentCommand>
    {
        public RegisterStudentCommandValidator()
        {
            RuleFor(p => p.Password)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe uma senha!")
                .Must(password => !Validations.ContainsSpaces(password))
                .WithMessage("A senha não pode conter espaços.");
        }
    }
}
