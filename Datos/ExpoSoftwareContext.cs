
using Entity;
using Microsoft.EntityFrameworkCore;


namespace Datos
{
    public class ExpoSoftwareContext : DbContext
    {
        public ExpoSoftwareContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Area> Areas { get; set; }

        public DbSet<Asignatura> Asignaturas { get; set; }
        public DbSet<Docente> Docentes { get; set; }
        public DbSet<Proyecto> Proyectos { get; set; }
        public DbSet<Estudiante> Estudiantes {get; set; }
    
        
    }
}