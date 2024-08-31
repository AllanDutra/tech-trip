using FluentValidation;
using TechKids.Application.Commands;
using TechKids.Shared.Utils;

namespace TechKids.Application.Validators
{
    public class UpdateStudentPasswordCommandValidator
        : AbstractValidator<UpdateStudentPasswordCommand>
    {
        public UpdateStudentPasswordCommandValidator()
        {
            RuleFor(p => p.Id)
                .NotNull()
                .NotEmpty()
                .WithMessage("O id do estudante é obrigatório para atualizar sua senha.");

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
