using Datos;
using Entity;
using System;
using System.Collections.Generic;


namespace Logica
{
    public class ProyectoService
    {

        private readonly ConnectionManager _conexion;
        private readonly ProyectoRepository  _repositorio;


        public ProyectoService(string connectionString)
        {
            _conexion = new ConnectionManager(connectionString);
            _repositorio = new ProyectoRepository(_conexion);
        }


        
        public GuardarProyectoResponse Guardar(Proyecto proyecto)
        {
            try
            {
                
                _conexion.Open();
                
                var ProyectoBuscado= _repositorio.BuscarPorIdentificacion(proyecto.IdProyecto);

                if(ProyectoBuscado!=null){
                    
                    return new GuardarProyectoResponse("Error el proyecto ya se encuentra registrado");

                }

                _repositorio.Guardar(proyecto);

                _conexion.Close();
                return new GuardarProyectoResponse(proyecto);
            }
            catch (Exception e)
            {
                return new GuardarProyectoResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
        }


        public class GuardarProyectoResponse 
        {
            public GuardarProyectoResponse(Proyecto proyecto)
            {
                Error = false;
                Proyecto = proyecto;
            }
            public GuardarProyectoResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Proyecto Proyecto { get; set; }
        }


        public List<Proyecto> ConsultarTodos()
        {
            _conexion.Open();
            List<Proyecto> proyectos = _repositorio.ConsultarTodos();
            _conexion.Close();
            return proyectos;
        }



         public Proyecto BuscarxIdentificacion(string identificacion)
        {
            _conexion.Open();
            Proyecto proyecto = _repositorio.BuscarPorIdentificacion(identificacion);
            _conexion.Close();
            return proyecto;
        }



         public string ModificarEstado(Proyecto proyecto)
        {
            try
            {
                _conexion.Open();
                var proyectoViejo = _repositorio.BuscarPorIdentificacion(proyecto.IdProyecto);
                if (proyectoViejo != null)
                {
                    _repositorio.ModificarEstado(proyecto);
                    _conexion.Close();
                    return ($"El registro {proyectoViejo.Titulo} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {proyecto.IdProyecto} no se encuentra registrada.");
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