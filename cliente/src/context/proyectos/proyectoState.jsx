import React, { useReducer } from "react";
import ProyectoContext from "./proyectoContext";
import ProyectoReducer from "./proyectoReducer";
import uuid from "uuid"
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTOS,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO 
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "tienda virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de Sitio Web" },
    { id: 4, nombre: "SEO" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario:false,
    proyecto:null

  };
  //Dispacth  para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);
  //Serie de funciones para el crud
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };
  //Agregar nuevo Proyecto
  const agregarProyecto =proyecto =>{
      proyecto.id =uuid.v4();
      //insertar el proyecto en el state
      dispatch({
        type: AGREGAR_PROYECTOS,
        payload: proyecto,
      });
  }
  //vALIDAR FORMULARIO POR ERRORES
  const mostrarError =  ()=>{
      dispatch({
          type:VALIDAR_FORMULARIO
      })
  }
  //Seleccionar el Proyecto en el usuario dio Click
  const proyectoActual =  proyectoId =>{
    dispatch({
        type:PROYECTO_ACTUAL,
        payload:proyectoId
})
  }
  //Elimina un proyecto
  const eliminarProyecto = proyectoId =>{
    dispatch({
        type:ELIMINAR_PROYECTO,
        payload:proyectoId
})
  }
  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto:state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
