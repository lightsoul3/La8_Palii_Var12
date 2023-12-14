using System.ComponentModel.DataAnnotations;

namespace StudentsRating_Lab8.Models
{
    public class Teacher
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; } = null!;
    }
}
