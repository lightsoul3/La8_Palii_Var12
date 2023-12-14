using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentsRating_Lab8.DataBase;
using StudentsRating_Lab8.Models;

namespace StudentsRating_Lab8.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RatingController : ControllerBase
    {
        private readonly SchoolContext _db;

        public RatingController(SchoolContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Rating>> GetRatings()
        {
            return await _db.Ratings.Include(p => p.Student).Include(p => p.Subject).Include(p => p.Teacher).OrderBy(p => p.ID).ToListAsync();
        }
     

        [HttpPost]
        public async Task<JsonResult> AddRating(Rating rating)
        {
            Student? student = await _db.Students.FindAsync(rating.StudentID);
            Subject? subject = await _db.Subjects.FindAsync(rating.SubjectID);
            Teacher? teacher = await _db.Teachers.FindAsync(rating.TeacherID);

            if (student != null && subject != null && teacher != null)
            {
                rating.Student = student;
                rating.Subject = subject;
                rating.Teacher = teacher;

                await _db.Ratings.AddAsync(rating);
                await _db.SaveChangesAsync();

                return new JsonResult("Rating added successfully");
            }

            return new JsonResult("Invalid student, subject, or teacher") { StatusCode = 400 };
        }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteRating(int id)
        {
            _db.Ratings.Remove(await _db.Ratings.FindAsync(id));
            await _db.SaveChangesAsync();
            return new JsonResult("Rating deleted successfully");
        }
    }
}
