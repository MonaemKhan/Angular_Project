using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz_Web_API.DbConn;
using Quiz_Web_API.Model.ViewModel;

namespace Quiz_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizQuestionController : Controller
    {
        private readonly QuizDatabaseConnectionContex _context;
        public QuizQuestionController(QuizDatabaseConnectionContex context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllQuizDetails()
        {
            List<QuizObj> quizOBjs = new List<QuizObj>();
            var quiz = await _context.QuizTable.ToListAsync();
            foreach (var item in quiz)
            {
                var question = await _context.QuestionTable.Where(m=>m.QuizId == item.QuizId).ToListAsync();
                int total_question = 0;
                int total = 0;
                if (question != null)
                {
                    total_question = question.Count();
                    foreach (var que in question)
                    {
                        total = total + que.Mark;
                    }
                }
                quizOBjs.Add(new QuizObj
                {
                    QuizId = item.QuizId,
                    QuizName = item.QuizName,
                    Total_Question = total_question,
                    number = total
                });
            }
            return Ok(quizOBjs);
        }

        [HttpGet("Id:int")]
        public async Task<IActionResult> GetQuizDetails(int Id)
        {
            List<QuizObj> quizOBjs = new List<QuizObj>();
            var quiz = await _context.QuizTable.FindAsync(Id);
            if(quiz != null)
            {
                var question = await _context.QuestionTable.Where(m => m.QuizId == quiz.QuizId).ToListAsync();
                int total_question = 0;
                int total = 0;
                if (question != null)
                {
                    total_question = question.Count();
                    foreach (var que in question)
                    {
                        total = total + que.Mark;
                    }
                }
                quizOBjs.Add(new QuizObj
                {
                    QuizId = quiz.QuizId,
                    QuizName = quiz.QuizName,
                    Total_Question = total_question,
                    number = total
                });
                return Ok(quizOBjs);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet("QId:int")]
        public async Task<IActionResult> GetQuestionByQuizId(int QId)
        {
            var data = await _context.QuestionTable.Where(m=>m.QuizId== QId).ToListAsync();
            if(data!=null)
            {
                return Ok(data);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
