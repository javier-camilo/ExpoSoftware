using System.Collections.Generic;
using System.Linq;
using Entity;
using Logica;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ExpoSoftware.Models;
using Microsoft.AspNetCore.Http;
namespace ExpoSoftware.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        private readonly EstudianteService _EstudianteService;
        public IConfiguration Configuration { get; }

        public EstudianteController(IConfiguration configuration)
        {
            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _EstudianteService = new EstudianteService(connectionString);
        }


        // POST: api/Estudiante
        
        [HttpPost]
        public ActionResult<EstudianteViewModel> Post(EstudianteInputModel estudianteInput)
        {
            Estudiante estudiante = Mapear(estudianteInput);
            var response = _EstudianteService.Guardar(estudiante);
            if (response.Error)
            {
                ModelState.AddModelError("Guardar Estudiante", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Estudiante);
        }


        private Estudiante Mapear(EstudianteInputModel estudianteInput)
        {
            var estudiante = new Estudiante
            {
                Identificacion = estudianteInput.Identificacion,
                Nombre = estudianteInput.Nombre,
                Correo = estudianteInput.Correo,
                Asignatura = estudianteInput.Asignatura,
                Semestre = estudianteInput.Semestre
            };
            return estudiante;
        }






        // GET: api/Estudiante
        [HttpGet]
        public IEnumerable<EstudianteViewModel> Gets()
        {
            var estudiante = _EstudianteService.ConsultarTodos().Select(p => new EstudianteViewModel(p));
            return estudiante;

        }

        // GET: api/Estudiante/5
        [HttpGet("{identificacion}")]
        public ActionResult<EstudianteViewModel> Get(string identificacion)
        {
            var estudiante = _EstudianteService.BuscarIdentificacion(identificacion);
            if (estudiante == null) return NotFound();
            var estudianteViewModel = new EstudianteViewModel(estudiante);
            return estudianteViewModel;
        }



        // PUT: api/Estudiante/5
        [HttpPut("{identificacion}")]
        public ActionResult<string> Put(string identificacion, Estudiante estudiante)
        {
            var id = _EstudianteService.BuscarIdentificacion(estudiante.Identificacion);
            if (id == null)
            {
                string resultadoConsulta = "no se encontro registro";
                return resultadoConsulta;
            }
            var mensaje = _EstudianteService.Modificar(estudiante);
            return Ok(mensaje);

        }


        // DELETE: api/ApiWithActions/5
        [HttpDelete("{identificacion}")]
        public ActionResult<string> Delete(string identificacion)
        {
            string mensaje = _EstudianteService.Eliminar(identificacion);
            return Ok(mensaje);
        }
    }
}
