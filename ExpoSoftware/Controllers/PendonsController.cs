using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Datos;
using Entity;
using System.IO;
using System.Net.Http.Headers;

namespace ExpoSoftware.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PendonsController : ControllerBase
    {
        private readonly ExpoSoftwareContext _context;

        public PendonsController(ExpoSoftwareContext context)
        {
            _context = context;
        }



        // GET: api/Pendons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pendon>>> GetPendons()
        {
            return await _context.Pendons.ToListAsync();
        }

        // GET: api/Pendons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pendon>> GetPendon(string id)
        {
            var pendon = await _context.Pendons.FindAsync(id);

            if (pendon == null)
            {
                return NotFound();
            }

            return pendon;
        }

        // PUT: api/Pendons/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPendon(string id, Pendon pendon)
        {
            if (id != pendon.IdPendon)
            {
                return BadRequest();
            }

            _context.Entry(pendon).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PendonExists(id))
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

        // POST: api/Pendons
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Pendon>> PostPendon(Pendon pendon)
        {
            _context.Pendons.Add(pendon);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PendonExists(pendon.IdPendon))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPendon", new { id = pendon.IdPendon }, pendon);
        }

        // DELETE: api/Pendons/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Pendon>> DeletePendon(string id)
        {
            var pendon = await _context.Pendons.FindAsync(id);
            if (pendon == null)
            {
                return NotFound();
            }

            _context.Pendons.Remove(pendon);
            await _context.SaveChangesAsync();

            return pendon;
        }

        private bool PendonExists(string id)
        {
            return _context.Pendons.Any(e => e.IdPendon == id);
        }
    }
}
