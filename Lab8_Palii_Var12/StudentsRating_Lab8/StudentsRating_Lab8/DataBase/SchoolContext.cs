using Microsoft.EntityFrameworkCore;
using StudentsRating_Lab8.Models;

namespace StudentsRating_Lab8.DataBase
{
    public class SchoolContext : DbContext
    {
        public SchoolContext(DbContextOptions<SchoolContext> options) : base(options)
        {
        }
        public DbSet<Student> Students { get; set; } = null!;
        public DbSet<Teacher> Teachers { get; set; } = null!;
        public DbSet<Subject> Subjects { get; set; } = null!;
        public DbSet<Rating> Ratings { get; set; } = null!;
    }
}
