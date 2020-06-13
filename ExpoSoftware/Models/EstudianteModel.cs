﻿using System.ComponentModel.DataAnnotations;
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

        
        [Required(ErrorMessage = "El celular  es requerido")]
        public string celular { get; set; }


        [Required(ErrorMessage = "La asignatura es requerida")]
        public string Asignatura { get; set; }

        [Required(ErrorMessage = "El celular es requerido")]
        public string Celular { get; set; }

    }

    public class EstudianteViewModel : EstudianteInputModel
    {
        public EstudianteViewModel()
        {

        }

        public EstudianteViewModel(Estudiante estudiante)
        {
            Identificacion = estudiante.IdEstudiante;
            Nombre = estudiante.NombreCompleto;
            Correo = estudiante.Correo;
            Asignatura = estudiante.CodigoAsignatura;
            Celular = estudiante.celular;

        }

    }


}
