using System.Net;
using MediatR;
using TechKids.Core.Configurations;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces;
using TechKids.Core.Interfaces.Factories;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.InputModels;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Application.Commands
{
    public class ProcessAttemptForChallengeCommandHandler
        : IRequestHandler<
            ProcessAttemptForChallengeCommand,
            ProcessedAttemptForChallengeProductViewModel?
        >
    {
        private readonly IProcessAttemptDomainServiceAbstractFactory _processAttemptDomainServiceAbstractFactory;
        private readonly IUnitOfWork _unitOfWork;
        private readonly INotifier _notifier;

        public ProcessAttemptForChallengeCommandHandler(
            IProcessAttemptDomainServiceAbstractFactory processAttemptDomainServiceAbstractFactory,
            IUnitOfWork unitOfWork,
            INotifier notifier
        )
        {
            _processAttemptDomainServiceAbstractFactory =
                processAttemptDomainServiceAbstractFactory;
            _unitOfWork = unitOfWork;
            _notifier = notifier;
        }

        public async Task<ProcessedAttemptForChallengeProductViewModel?> Handle(
            ProcessAttemptForChallengeCommand request,
            CancellationToken cancellationToken
        )
        {
            bool challengeExists = await _unitOfWork.Challenges.ChallengeExistsAsync(
                request.Challenge_Id
            );

            if (!challengeExists)
            {
                _notifier.Handle(
                    $"Não existe desafio com o id {request.Challenge_Id}.",
                    HttpStatusCode.NotFound
                );

                return null;
            }

            bool studentAlreadyScoredInThisChallenge =
                await _unitOfWork.Scores.StudentAlreadyScoredInTheChallengeAsync(
                    StudentAuthenticationSettings.Claims.Id,
                    request.Challenge_Id
                );

            if (studentAlreadyScoredInThisChallenge)
            {
                _notifier.Handle(
                    "Você já resolveu este desafio anteriormente.",
                    HttpStatusCode.Conflict
                );

                return null;
            }

            Score? lastScore = await _unitOfWork.Scores.GetLastStudentScoreAsync(
                StudentAuthenticationSettings.Claims.Id
            );

            int currentChallengeId;

            if (lastScore is null)
            {
                currentChallengeId = 1;
            }
            else
            {
                currentChallengeId = ((int)lastScore.ChallengeId!) + 1;
            }

            if (request.Challenge_Id != currentChallengeId)
            {
                _notifier.Handle(
                    $"Você não pode resolver o desafio {request.Challenge_Id} sem antes resolver o desafio {currentChallengeId}",
                    HttpStatusCode.Conflict
                );

                return null;
            }

            AnswerKey? answerKey = await _unitOfWork.AnswerKeys.GetChallengeAnswerKeyAsync(
                request.Challenge_Id
            );

            if (answerKey == null)
            {
                _notifier.Handle(
                    $"Gabarito não encontrado para o desafio {request.Challenge_Id}. Não é possível fazer a sua correção.",
                    HttpStatusCode.NotFound
                );

                return null;
            }

            int totalStudentAttempts =
                await _unitOfWork.Attempts.GetStudentAttemptsForChallengeAsync(
                    StudentAuthenticationSettings.Claims.Id,
                    request.Challenge_Id
                );

            ProcessAttemptInputModel inputModel =
                new(
                    request.Steps,
                    request.StudentResponse,
                    answerKey.Response,
                    totalStudentAttempts
                );

            IProcessAttemptDomainService processAttemptDomainService =
                _processAttemptDomainServiceAbstractFactory.GetService(request.Challenge_Id);

            short? processAttemptMarginOfError =
                _processAttemptDomainServiceAbstractFactory.GetMarginOfError(request.Challenge_Id);

            if (processAttemptMarginOfError.HasValue)
            {
                inputModel.MarginOfError = processAttemptMarginOfError;
            }

            ProcessedAttemptProductViewModel? processedAttemptProduct =
                processAttemptDomainService.Process(inputModel);

            if (processedAttemptProduct == null)
                return null;

            Attempt attempt =
                new(
                    processedAttemptProduct.CorrectAttempt,
                    request.Steps,
                    DateTime.Now,
                    request.StudentResponse,
                    StudentAuthenticationSettings.Claims.Id,
                    request.Challenge_Id
                );

            try
            {
                await _unitOfWork.BeginTransactionAsync();

                await _unitOfWork.Attempts.RegisterAttemptAsync(attempt);

                if (processedAttemptProduct.CorrectAttempt)
                {
                    short totalStarsEarned = (short)processedAttemptProduct.TotalStars!;
                    short totalDiamondsEarned = 0;

                    if (lastScore?.Stars == 3 && totalStarsEarned == 3)
                    {
                        totalDiamondsEarned = 1;
                    }

                    Score score =
                        new(
                            totalStarsEarned,
                            totalDiamondsEarned,
                            DateTime.Now,
                            StudentAuthenticationSettings.Claims.Id,
                            request.Challenge_Id
                        );

                    await _unitOfWork.Scores.RegisterScoreAsync(score);

                    await _unitOfWork.CommitAsync();

                    return new ProcessedAttemptForChallengeProductViewModel(
                        true,
                        totalStarsEarned,
                        totalDiamondsEarned
                    );
                }
                else
                {
                    await _unitOfWork.CommitAsync();

                    _notifier.Handle(
                        "A tentativa não foi bem-sucedida. Por favor, tente outra vez!",
                        HttpStatusCode.BadRequest
                    );

                    return null;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
