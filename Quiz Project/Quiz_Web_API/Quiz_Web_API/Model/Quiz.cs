using System.ComponentModel.DataAnnotations;

namespace Quiz_Web_API.Model
{
    public class Quiz
    {
        [Key]
        public int QuizId { get; set; }
        public string? QuizName { get; set; }
    }
}
