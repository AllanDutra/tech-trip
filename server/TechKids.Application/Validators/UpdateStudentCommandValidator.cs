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
        }
    }
}
