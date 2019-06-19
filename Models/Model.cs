using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace InstagramClone.Models
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
            : base(options)
        {
         }

        public DbSet<User> Users { get; set; }
    }
}