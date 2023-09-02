using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz_Web_API.DbConn;
using Quiz_Web_API.Model;

namespace Quiz_Web_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : Controller
    {
        private readonly QuizDatabaseConnectionContex _context;
        public QuizController(QuizDatabaseConnectionContex context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> QuizGetAll()
        {
            var data = await _context.QuizTable.ToListAsync();
            return Ok(data);
        }

        [HttpGet("Id:int")]
        public async Task<IActionResult> QuizGet(int Id)
        {
            var data = await _context.QuizTable.FindAsync(Id);
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> QuizPost(Quiz Q)
        {
            await _context.QuizTable.AddAsync(Q);
            await _context.SaveChangesAsync();
            return Ok(Q);
        }

        [HttpPut("Id:int")]
        public async Task<IActionResult> QuizUpdate(int Id,Quiz Q)
        {
            var data = await _context.QuizTable.FindAsync(Id);
            if(data == null)
            {
                return BadRequest();
            }
            else
            {
                data.QuizId = Id;
                data.QuizName = Q.QuizName;
                _context.Entry(data).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok(Q);
            }
            
        }

        [HttpDelete("Id:int")]
        public async Task<IActionResult> Quiz_Delete(int Id)
        {
            var data = await _context.QuizTable.FindAsync(Id);
            if(data == null)
            {
                return BadRequest();
            }
            _context.QuizTable.Remove(data);
            await _context.SaveChangesAsync();
            return Ok("Data Deleted");
        }
    }
}
