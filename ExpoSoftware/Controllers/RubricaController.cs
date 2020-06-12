using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entity;

namespace ExpoSoftware.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RubricaController : ControllerBase
    {
        private readonly ExpoSoftwareContext _context;

        public RubricaController(ExpoSoftwareContext context)
        {
            _context = context;
        }

        // GET: api/Rubrica
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rubrica>>> GetRubricas()
        {
            return await _context.Rubricas.ToListAsync();
        }

        // GET: api/Rubrica/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rubrica>> GetRubrica(string id)
        {
            var rubrica = await _context.Rubricas.FindAsync(id);

            if (rubrica == null)
            {
                return NotFound();
            }

            return rubrica;
        }

        // PUT: api/Rubrica/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRubrica(string id, Rubrica rubrica)
        {
            if (id != rubrica.IdRubrica)
            {
                return BadRequest();
            }

            _context.Entry(rubrica).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RubricaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Rubrica
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Rubrica>> PostRubrica(Rubrica rubrica)
        {
            _context.Rubricas.Add(rubrica);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RubricaExists(rubrica.IdRubrica))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRubrica", new { id = rubrica.IdRubrica }, rubrica);
        }

        // DELETE: api/Rubrica/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Rubrica>> DeleteRubrica(string id)
        {
            var rubrica = await _context.Rubricas.FindAsync(id);
            if (rubrica == null)
            {
                return NotFound();
            }

            _context.Rubricas.Remove(rubrica);
            await _context.SaveChangesAsync();

            return rubrica;
        }

        private bool RubricaExists(string id)
        {
            return _context.Rubricas.Any(e => e.IdRubrica == id);
        }
    }
}
