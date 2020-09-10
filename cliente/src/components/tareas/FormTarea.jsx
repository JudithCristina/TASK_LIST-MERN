import React, { useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(ProyectoContext);
  const { proyecto } = proyectosContext;

  //Obtener la función del context de tarea
  const tareasContext = useContext(TareaContext);
  const {obtenerTareas, errortarea, agregarTarea, validarTarea } = tareasContext;
  //State del formulario

  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  //Extraer el nombre del proyecto

  const { nombre } = tarea;
  //Si no hay proyecto seleccionado
  if (!proyecto) return null;
  //  Array destructuring para extreaer el proyecto Actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //validar
    if(nombre.trim()===""){
        validarTarea();
        return;
    }
 

    //Agregar nueva tarea
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);
    //Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id)
    //reiniciar el form 
    guardarTarea({
        nombre:""
    })
  };
  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tareas"
          />
        </div>
      </form>
      {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>:null}
    </div>
  );
};

export default FormTarea;
