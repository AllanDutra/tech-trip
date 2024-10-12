using FluentValidation;
using TechTrip.Application.Commands;

namespace TechTrip.Application.Validators
{
    public class ProcessAttemptForChallengeCommandValidator
        : AbstractValidator<ProcessAttemptForChallengeCommand>
    {
        public ProcessAttemptForChallengeCommandValidator()
        {
            RuleFor(p => p.StudentResponse)
                .NotNull()
            //     .NotEmpty()
                .WithMessage("A resposta do estudante deve ser informada.");

            RuleFor(p => p.Steps)
                .NotNull()
                .NotEmpty()
                .WithMessage("O número de passos até atingir a resposta deve ser informado.")
                .GreaterThanOrEqualTo((short)1)
                .WithMessage("O número de passos executados deve ser maior ou igual a 1.");

            RuleFor(p => p.Challenge_Id)
                .NotNull()
                .NotEmpty()
                .WithMessage("O id do desafio deve ser informado.");
        }
    }
}
