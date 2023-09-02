using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz_Web_API.DbConn;
using Quiz_Web_API.Model;

namespace Quiz_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private readonly QuizDatabaseConnectionContex _context;
        public QuestionController(QuizDatabaseConnectionContex context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllQuestion()
        {
            var data = await _context.QuestionTable.ToListAsync();
            return Ok(data);
        }
        [HttpPost]
        public async Task<IActionResult> PostQuestion(Question question)
        {
            await _context.QuestionTable.AddAsync(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }
        [HttpGet("Id:int")]
        public async Task<IActionResult> GetQuestion(int Id)
        {
            var data = await _context.QuestionTable.FindAsync(Id);
            return Ok(data);
        }
        [HttpPut("Id:int")]
        public async Task<IActionResult> UpdateQuestion(int Id,Question question)
        {
            var data = await _context.QuestionTable.FindAsync(Id);
            if(data == null)
            {
                return BadRequest();
            }
            else
            {
                data.QuestionId = Id;
                data.QuestionName = question.QuestionName;
                data.Option1 = question.Option1;
                data.Option2 = question.Option2;
                data.Option3 = question.Option3;
                data.Option4 = question.Option4;
                data.Right_Answer = question.Right_Answer;
                data.Mark = question.Mark;
                data.QuizId = question.QuizId;
                _context.Entry(data).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok(data);
            }
        }

        [HttpDelete("Id:int")]
        public async Task<IActionResult> DeleteQuestion(int Id)
        {
            var data = await _context.QuestionTable.FindAsync(Id);
            if (data == null)
            {
                return BadRequest();
            }
            else
            {
                _context.QuestionTable.Remove(data);
                await _context.SaveChangesAsync();
                return Ok(data);
            }
        }
    }
}
