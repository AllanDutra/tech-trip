using TechTrip.Core.Entities;

namespace TechTrip.Core.Models.InputModels
{
    public class ProcessAttemptInputModel
    {
        public ProcessAttemptInputModel(
            short steps,
            string studentResponse,
            string answerKey_Response,
            int totalStudentAttemptsForChallenge
        )
        {
            Steps = steps;
            StudentResponse = studentResponse;
            AnswerKey_Response = answerKey_Response;
            TotalStudentAttemptsForChallenge = totalStudentAttemptsForChallenge;
        }

        public short Steps { get; }
        public string StudentResponse { get; }
        public string AnswerKey_Response { get; }
        public int TotalStudentAttemptsForChallenge { get; }
        public short? MarginOfError { get; set; }
        public short? MaxCompoundChallengeStages { get; set; }
        public Attempt? LastCompoundChallengeAttempt { get; set; }
    }
}
