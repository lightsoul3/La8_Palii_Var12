using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentsRating_Lab8.DataBase;
using StudentsRating_Lab8.Models;

namespace StudentsRating_Lab8.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubjectController : ControllerBase
    {
        private readonly SchoolContext _db;

        public SubjectController(SchoolContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Subject>> GetSubjects()
        {
            return await _db.Subjects.OrderBy(p => p.ID).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Subject> GetSubject(int id)
        {
            return await _db.Subjects.FindAsync(id);
        }

        [HttpPost]
        public async Task<JsonResult> AddSubject(Subject subject)
        {
            await _db.Subjects.AddAsync(subject);
            await _db.SaveChangesAsync();

            return new JsonResult("Subject was added successfully");
        }

        [HttpPut]
        public async Task<JsonResult> EditSubject(Subject subject)
        {

            _db.Entry(subject).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return new JsonResult("Subject was updated successfully");
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteSubject(int id)
        {
            _db.Subjects.Remove(await _db.Subjects.FindAsync(id));
            await _db.SaveChangesAsync();

            return new JsonResult("Subject was deleted successfully");
        }
    }
}
