import React, { Fragment, useState, useContext } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el state de proyectos
  const proyectosContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectosContext;
  //Obtener la función del context de tarea
  const tareasContext = useContext(TareaContext);
  const {obtenerTareas}= tareasContext;
  //Funcion para agregar el proyecto actual
  const seleccionarProyecto =id =>{
    proyectoActual(id); //Fijar el proyecto Actual
    obtenerTareas(id);//Filtrar las tareas cuando se de clic

  }
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={()=> seleccionarProyecto(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
