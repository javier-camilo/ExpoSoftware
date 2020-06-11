using System.ComponentModel.DataAnnotations;
using Entity;

namespace ExpoSoftware.Models
{
    public class EstudianteInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        [StringLength(2, ErrorMessage = "maximo de 10")]
        public string Identificacion { get; set; }


        [Required(ErrorMessage = "El nombre  es requerido")]
        public string Nombre { get; set; }


        [Required(ErrorMessage = "El correo  es requerido")]
        public string Correo { get; set; }


        [Required(ErrorMessage = "La asignatura es requerida")]
        public string Asignatura { get; set; }

        [Required(ErrorMessage = "El semestre es requerido")]
        public int Semestre { get; set; }

    }

    public class EstudianteViewModel : EstudianteInputModel
    {
        public EstudianteViewModel()
        {

        }

        public EstudianteViewModel(Estudiante estudiante)
        {
            Identificacion = estudiante.Identificacion;
            Nombre = estudiante.Nombre;
            Correo = estudiante.Correo;
            Asignatura = estudiante.Asignatura;
            Semestre = estudiante.Semestre;

        }

    }


}
