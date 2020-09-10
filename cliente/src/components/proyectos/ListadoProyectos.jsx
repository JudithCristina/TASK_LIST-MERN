import React, { Fragment, useState, useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/tareaContext";
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;
  //Obtener proyectos cuando carga el componente
  useEffect(() => {
      obtenerProyectos()
  }, []);
  //Revisar si proyecto tiene contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
     <TransitionGroup>
     {proyectos.map((proyecto) => (
        <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
          <Proyecto  proyecto={proyecto} />
        </CSSTransition>
      ))}
     </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
