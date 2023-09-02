using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz_Web_API.Model
{
    public class Your_Answer
    {
        [Key]
        public int AnswerId { get; set; }
        public string? Answer { get; set; }

        [ForeignKey(nameof(Question))]
        public int QuestionId { get; set; }
        public Question? Questions { get; set; }
    }
}
