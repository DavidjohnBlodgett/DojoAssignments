using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
    public class CommentVal : BaseEntity
    {   
        public int messageid {get; set; }

        [Required]
        [MinLength(1)]
        public string content { get; set; }
    }
}