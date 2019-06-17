using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace InstagramClone.Models
{
    public class BloggingContext : DbContext
    {
        public BloggingContext(DbContextOptions<BloggingContext> options)
            : base(options)
        {
         }

        public DbSet<User> Users { get; set; }
    }
}