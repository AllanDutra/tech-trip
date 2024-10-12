using FluentValidation;
using TechTrip.Application.Commands;

namespace TechTrip.Application.Validators
{
    public class AuthenticateStudentCommandValidator : AbstractValidator<AuthenticateStudentCommand>
    {
        public AuthenticateStudentCommandValidator()
        {
            RuleFor(p => p.User)
                .NotNull()
                .NotEmpty()
                .WithMessage("O nome de usuário é obrigatório.");

            RuleFor(p => p.Password).NotNull().NotEmpty().WithMessage("A senha é obrigatória.");
        }
    }
}
