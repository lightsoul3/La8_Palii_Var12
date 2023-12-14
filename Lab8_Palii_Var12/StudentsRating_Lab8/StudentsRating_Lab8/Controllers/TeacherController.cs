using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentsRating_Lab8.DataBase;
using StudentsRating_Lab8.Models;

namespace StudentsRating_Lab8.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeacherController : ControllerBase
    {
        private readonly SchoolContext _db;

        public TeacherController(SchoolContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Teacher>> GetTeachers()
        {
            return await _db.Teachers.OrderBy(p => p.ID).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Teacher> GetTeacher(int id)
        {
            var teacher = await _db.Teachers.FindAsync(id);
            return teacher;
        }

        [HttpPost]
        public async Task<JsonResult> AddTeacher(Teacher teacher)
        {
            await _db.Teachers.AddAsync(teacher);
            await _db.SaveChangesAsync();
            return new JsonResult("Teacher was added successfully");
        }

        [HttpPut]
        public async Task<JsonResult> EditTeacher(Teacher teacher)
        {
            _db.Entry(teacher).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return new JsonResult("Tecaher was edited successfully");
        }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteTeacher(int id)
        {
            _db.Teachers.Remove(await _db.Teachers.FindAsync(id));
            await _db.SaveChangesAsync();

            return new JsonResult("Tecaher was deleted successfully");
        }
    }
}
