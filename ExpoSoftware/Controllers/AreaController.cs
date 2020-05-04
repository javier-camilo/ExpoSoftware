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
    public class AreaController : ControllerBase
    {

        private readonly AreaService _AreaService;
        public IConfiguration Configuration { get; }
        

        public AreaController(IConfiguration configuration)
        {

            Configuration = configuration;
            string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            _AreaService = new AreaService(connectionString);

        }


        [HttpPost]
        public ActionResult<AreaViewModel> Post(AreaInputModel areaInputModel)
        {
            
            Area area = Mapear(areaInputModel);
            var response = _AreaService.Guardar(area);
            if (response.Error) 
            {
                
                ModelState.AddModelError("Guardar area", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);

            }
            return Ok(response.Area);
        }

        private Area Mapear(AreaInputModel areaInputModel)
        {
            var area = new Area
            {
                CodigoArea = areaInputModel.CodigoArea,
                NombreArea = areaInputModel.NombreArea
            };

            return area;
        }



        
        
    }
}