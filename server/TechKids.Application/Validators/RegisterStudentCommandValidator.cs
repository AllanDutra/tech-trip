using FluentValidation;
using TechKids.Application.Commands;
using TechKids.Shared.Utils;

namespace TechKids.Application.Validators
{
    public class RegisterStudentCommandValidator : StudentBaseValidator<RegisterStudentCommand>
    {
        public RegisterStudentCommandValidator()
        {
            RuleFor(p => p.Password.Trim())
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe uma senha!")
                .Must(password => !Validations.ContainsSpaces(password))
                .WithMessage("A senha não pode conter espaços.");
        }
    }
}
