using Datos;
using Entity;
using System;
using System.Collections.Generic;

namespace Logica
{
    public class AreaService
    {

        private readonly ConnectionManager _conexion;
        private readonly AreaRepository _repositorio;

        public AreaService(string connectionString)
        {
            _conexion = new ConnectionManager(connectionString);
            _repositorio = new AreaRepository(_conexion);
        }


        public GuardarAreaResponse Guardar(Area area)
        {
            try
            {
                
                _conexion.Open();
                
                var areaBuscada= _repositorio.BuscarPorIdentificacion(area.CodigoArea);

                if(areaBuscada!=null){
                    
                    return new GuardarAreaResponse("Error el area ya se encuentra registrada");

                }

                _repositorio.Guardar(area);

                _conexion.Close();

                return new GuardarAreaResponse(area);

            }
            catch (Exception e)
            {
                return new GuardarAreaResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
            
        }


        public class GuardarAreaResponse 
        {
            public GuardarAreaResponse(Area area)
            {
                Error = false;
                Area = area;
            }
            public GuardarAreaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Area Area { get; set; }
        }


        public List<Area> ConsultarTodos()
        {
            _conexion.Open();
            List<Area> areas = _repositorio.ConsultarTodos();
            _conexion.Close();
            return areas;
            
        }


        public Area BuscarxIdentificacion(string identificacion)
        {
            _conexion.Open();
            Area area = _repositorio.BuscarPorIdentificacion(identificacion);
            _conexion.Close();
            return area;
        }

        
        public string Modificar(Area areaNueva)
        {
            try
            {
                _conexion.Open();
                var areaVieja = _repositorio.BuscarPorIdentificacion(areaNueva.CodigoArea);
                if (areaVieja != null)
                {
                    _repositorio.Modificar(areaNueva);
                    _conexion.Close();
                    return ($"El registro {areaNueva.NombreArea} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {areaNueva.CodigoArea} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
            finally { _conexion.Close(); }

        }

        




    }
}