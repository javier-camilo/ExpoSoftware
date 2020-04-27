
using Datos;
using Entity;
using System;
using System.Collections.Generic;

namespace Logica
{
    public class AsignaturaService
    {

        private readonly ConnectionManager _conexion;
        private readonly AsignaturaRepository _repositorio;

        public AsignaturaService(string connectionString)
        {
            _conexion = new ConnectionManager(connectionString);
            _repositorio = new AsignaturaRepository(_conexion);
        }

        public GuardarAsignaturaResponse Guardar(Asignatura asignatura)
        {
            try
            {
                _conexion.Open();
                _repositorio.Guardar(asignatura);
                _conexion.Close();
                return new GuardarAsignaturaResponse(asignatura);
            }
            catch (Exception e)
            {
                return new GuardarAsignaturaResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
        }

          public class GuardarAsignaturaResponse 
        {
            public GuardarAsignaturaResponse(Asignatura asignatura)
            {
                Error = false;
                Asignatura = asignatura;
            }
            public GuardarAsignaturaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Asignatura Asignatura { get; set; }
        }


        public List<Asignatura> ConsultarTodos()
        {
            _conexion.Open();
            List<Asignatura> asignaturas = _repositorio.ConsultarTodos();
            _conexion.Close();
            return asignaturas;
        }

        public Asignatura BuscarxIdentificacion(string identificacion)
        {
            _conexion.Open();
            Asignatura asignatura = _repositorio.BuscarPorIdentificacion(identificacion);
            _conexion.Close();
            return asignatura;

        }


        public string Eliminar(string identificacion)
        {
            try
            {
                _conexion.Open();
                var asignatura = _repositorio.BuscarPorIdentificacion(identificacion);
                if (asignatura != null)
                {
                    _repositorio.Eliminar(asignatura);
                    _conexion.Close();
                    return ($"El registro {asignatura.NombreAsignatura} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
            finally { _conexion.Close(); }

        }


        public string Modificar(Asignatura asignaturaNueva)
        {
            try
            {
                _conexion.Open();
                var asignaturaVieja = _repositorio.BuscarPorIdentificacion(asignaturaNueva.CodigoAsignatura);
                if (asignaturaVieja != null)
                {
                    _repositorio.Modificar(asignaturaNueva);
                    _conexion.Close();
                    return ($"El registro {asignaturaNueva.NombreAsignatura} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {asignaturaNueva.CodigoAsignatura} no se encuentra registrada.");
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