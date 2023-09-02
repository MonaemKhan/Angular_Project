using System.ComponentModel.DataAnnotations;

namespace Quiz_Web_API.Model
{
    public class User
    {
        [Key]
        public int UsertId { get; set; }
        public string? UserName { get; set; }
    }
}
