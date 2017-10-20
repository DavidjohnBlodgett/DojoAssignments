using Microsoft.EntityFrameworkCore;
 
namespace TheWall.Models
{
    public class TheWallContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public TheWallContext(DbContextOptions<TheWallContext> options) : base(options) { }

        public DbSet<User> users { get; set; }
        public DbSet<Message> messages { get; set; }
        public DbSet<Comment> comments { get; set; }
    }
}