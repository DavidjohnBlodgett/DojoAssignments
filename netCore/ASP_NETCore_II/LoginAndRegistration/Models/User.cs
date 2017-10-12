using System.ComponentModel.DataAnnotations;

namespace LoginAndRegistration.Models
{
    public class User : BaseEntity
    {
        [Required]
        [MinLength(4)]
        public string first_name { get; set; }

        [Required]
        [MinLength(4)]
        public string last_name { get; set; }

        // [Required]
        // [Range(0,int.MaxValue)]
        // [Range(0,1000)]
        // [RegularExpression("([0-9])+", ErrorMessage = "Please enter valid Number")]
        // [RegularExpression("^([0-9])+", ErrorMessage = "Please enter valid Number")]
        // [RegularExpression("^[0-9]+", ErrorMessage = "Please enter valid Number")]
        // public int age { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8)]
        public string password { get; set; }
    }
}