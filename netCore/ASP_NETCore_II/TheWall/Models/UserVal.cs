using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
    public class UserVal : BaseEntity
    {
        [Required]
        [MinLength(4)]
        public string first_name { get; set; }

        [Required]
        [MinLength(4)]
        public string last_name { get; set; }

        [Required]
        [EmailAddress]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8)]
        public string password { get; set; }
    }
}