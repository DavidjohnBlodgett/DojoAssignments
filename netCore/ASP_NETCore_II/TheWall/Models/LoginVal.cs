using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
    public class LoginVal : BaseEntity
    {
        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8)]
        public string password { get; set; }
    }
}