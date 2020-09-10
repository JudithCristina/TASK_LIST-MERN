import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

const ListadoTareas = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  //Obtener las tareas del proyecto
  const tareasContext = useContext(TareaContext);
  const { tareasproyecto } = tareasContext;
  //Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;
  //  Array destructuring para extreaer el proyecto Actual
  const [proyectoActual] = proyecto;

  return (
    <Fragment>
      <h2>Proyecto:{proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tareas">
                <Tarea  tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
