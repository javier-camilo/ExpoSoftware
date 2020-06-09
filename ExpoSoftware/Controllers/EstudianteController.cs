<<<<<<< HEAD
﻿using System.Collections.Generic;
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
=======
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entity;

namespace ExpoSoftware.Controllers
{
    public class EstudianteController : Controller
    {
        private readonly ExpoSoftwareContext _context;

        public EstudianteController(ExpoSoftwareContext context)
        {
            _context = context;
        }

        // GET: Estudiante
        public async Task<IActionResult> Index()
        {
            return View(await _context.Estudiantes.ToListAsync());
        }

        // GET: Estudiante/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var estudiante = await _context.Estudiantes
                .FirstOrDefaultAsync(m => m.IdEstudiante == id);
            if (estudiante == null)
            {
                return NotFound();
            }

            return View(estudiante);
        }

        // GET: Estudiante/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Estudiante/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("IdEstudiante,NombreCompleto,Correo,celular,CodigoAsignatura")] Estudiante estudiante)
        {
            if (ModelState.IsValid)
            {
                _context.Add(estudiante);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(estudiante);
        }

        // GET: Estudiante/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var estudiante = await _context.Estudiantes.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }
            return View(estudiante);
        }

        // POST: Estudiante/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("IdEstudiante,NombreCompleto,Correo,celular,CodigoAsignatura")] Estudiante estudiante)
        {
            if (id != estudiante.IdEstudiante)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(estudiante);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EstudianteExists(estudiante.IdEstudiante))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(estudiante);
        }

        // GET: Estudiante/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var estudiante = await _context.Estudiantes
                .FirstOrDefaultAsync(m => m.IdEstudiante == id);
            if (estudiante == null)
            {
                return NotFound();
            }

            return View(estudiante);
        }

        // POST: Estudiante/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var estudiante = await _context.Estudiantes.FindAsync(id);
            _context.Estudiantes.Remove(estudiante);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool EstudianteExists(string id)
        {
            return _context.Estudiantes.Any(e => e.IdEstudiante == id);
>>>>>>> 470991ece435706338fab3df2a30cc433d180c40
        }
    }
}
