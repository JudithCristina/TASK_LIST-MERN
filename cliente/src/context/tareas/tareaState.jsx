import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import {
  TAREA_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
} from "../../types";
const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id:1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      {  id:2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id:3, nombre: "Elegir Plataforma de Pagos", estado: false, proyectoId: 4 },
      {  id:4, nombre: "Elegir Hosting", estado: true, proyectoId: 3 },
      { id:5, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      {  id:6, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {  id:7, nombre: "Elegir Plataforma de Pagos", estado: false, proyectoId: 4 },
      {  id:8, nombre: "Elegir Hosting", estado: true, proyectoId: 3 },
      {  id:9, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      {  id:10, nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      {  id:11, nombre: "Elegir Plataforma de Pagos", estado: false, proyectoId: 4 },
      {  id:12, nombre: "Elegir Hosting", estado: true, proyectoId: 2 },
    ],
    tareasproyecto: null,
    errorTarea: false,
  };
  //Crear dispacth y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);
  //Crear funciones
  //Obtener tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREA_PROYECTO,
      payload: proyectoId,
    });
  };
  //Agredar una tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };
  //Valida y m uestra un error en caso sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //eLIMINAR TAREAS POR SU ID
  const eliminarTarea = id =>{
      dispatch({
          type:ELIMINAR_TAREA,
          payload:id
      })
  }
  //Cambia el estado de  cada tarea
  const cambiarEstadoTarea = tarea => {
      dispatch({
          type:ESTADO_TAREA,
          payload:tarea
      })
  }
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
