using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentsRating_Lab8.DataBase;
using StudentsRating_Lab8.Models;

namespace StudentsRating_Lab8.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly SchoolContext _db;

        public StudentController(SchoolContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Student>> GetStudents()
        {
            return await _db.Students.OrderBy(p => p.ID).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Student> GetStudent(int id)
        {
            return await _db.Students.FindAsync(id);
        }

        [HttpPost]
        public async Task<JsonResult> AddStudent(Student student)
        {
            await _db.Students.AddAsync(student);
            await _db.SaveChangesAsync();

            return new JsonResult("Student was added successfully");
        }

        [HttpPut]
        public async Task<JsonResult> EditStudent(Student student)
        {
            _db.Entry(student).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return new JsonResult("Student was updated successfully");
        }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteStudent(int id)
        {
            _db.Students.Remove(await _db.Students.FindAsync(id));
            await _db.SaveChangesAsync();

            return new JsonResult("Stiudent was deleted successfully");
        }

    }
}
