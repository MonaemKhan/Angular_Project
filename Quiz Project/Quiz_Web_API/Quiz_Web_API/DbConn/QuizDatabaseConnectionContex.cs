using Microsoft.EntityFrameworkCore;
using Quiz_Web_API.Model;

namespace Quiz_Web_API.DbConn
{
    public class QuizDatabaseConnectionContex:DbContext
    {
        public QuizDatabaseConnectionContex(DbContextOptions<QuizDatabaseConnectionContex> options):base(options)
        {
            
        }

        public DbSet<Quiz> QuizTable { get; set; }
        public DbSet<Question> QuestionTable { get; set; }
        public DbSet<Your_Answer> Your_AnswerTable { get; set; }
        public DbSet<User> UserTable { get; set; }
        public DbSet<Quiz_Track> Quiz_TrackTable { get; set; }
    }
}
