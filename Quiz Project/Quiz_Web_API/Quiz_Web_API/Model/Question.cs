using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz_Web_API.Model
{
    public class Question
    {
        [Key]
        public int QuestionId { get; set; }
        public string? QuestionName { get; set; }
        public string? Option1 { get; set; }
        public string? Option2 { get; set; }
        public string? Option3 { get; set; }
        public string? Option4 { get; set; }
        public string? Right_Answer { get; set; }
        public int Mark { get; set; }

        [ForeignKey(nameof(Quiz))]
        public int QuizId { get; set; }
        public Quiz? Quizs { get; set; }
    }
}
