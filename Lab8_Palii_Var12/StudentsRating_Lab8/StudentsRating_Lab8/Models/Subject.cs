using System.ComponentModel.DataAnnotations;

namespace StudentsRating_Lab8.Models
{
    public class Subject
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; } = null!;
        public int Rating { get; set; }
    }
}
