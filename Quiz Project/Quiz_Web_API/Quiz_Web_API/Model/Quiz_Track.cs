using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz_Web_API.Model
{
    public class Quiz_Track
    {
        [Key]
        public int QuizTrackId { get; set; }

        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public User? Users { get; set; }

        [ForeignKey(nameof(Your_Answer))]
        public int AnswerId { get; set; }
        public Your_Answer? Your_Answers { get; set; }

        [ForeignKey(nameof(Question))]
        public int QuestionId { get; set; }
        public Question? Question { get; set; }
    }
}
