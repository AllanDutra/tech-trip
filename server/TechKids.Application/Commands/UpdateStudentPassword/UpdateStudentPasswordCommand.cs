using MediatR;

namespace TechKids.Application.Commands
{
    public class UpdateStudentPasswordCommand : IRequest<Unit>
    {
        public int Id { get; set; }
        public string SenhaAtual { get; set; }
        public string NovaSenha { get; set; }
    }
}
