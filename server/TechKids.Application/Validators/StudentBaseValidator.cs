using FluentValidation;
using TechKids.Core.Models.InputModels;
using TechKids.Shared.Utils;

namespace TechKids.Application.Validators
{
    public class StudentBaseValidator<T> : AbstractValidator<T>
        where T : StudentBaseInputModel
    {
        public StudentBaseValidator()
        {
            RuleFor(p => p.Name.Trim())
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe o nome do estudante!");

            RuleFor(p => p.Email)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe um endereço de e-mail!")
                .Must(Validations.IsValidEmail)
                .WithMessage("Por favor, informe um endereço de e-mail válido!");

            RuleFor(p => p.User)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe um nome de usuário!")
                .Must(Validations.IsValidUsername)
                .WithMessage(
                    "Por favor, informe um nome de usuário válido. (Sem _ ou . no final ou no início; Sem __ ou _. ou ._ ou .. em sequência; Entre 8 a 50 caracteres.)"
                );

            RuleFor(p => p.Birth)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe a data de nascimento!")
                .LessThanOrEqualTo(DateTime.Now.Date)
                .WithMessage("A data de nascimento não pode ser maior do que a data atual!");

            RuleFor(p => p.Gender)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe o gênero!")
                .Must(Validations.IsValidGender)
                .WithMessage(
                    "Por favor, informe um gênero válido. Utilize 'male' para masculino ou 'female' para feminino."
                );

            RuleFor(p => p.Character_Id)
                .NotNull()
                .NotEmpty()
                .WithMessage("Por favor, informe o id do personagem!");
        }
    }
}
