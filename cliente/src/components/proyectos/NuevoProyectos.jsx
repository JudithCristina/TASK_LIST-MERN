import React, { Fragment, useState } from "react";

const NuevoProyectos = () => {
    //State para proyecto
    const [proyecto, guardarProyecto]=useState({
        nombre:""
    });
    //Extraer nombre del Proyecto
    const {nombre}=proyecto;
    //Lee los contenidos del input
    const onChangeProyecto=e=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }
    //Cuando el usuario enviar un proyecto
    const onSubmitProyectos=e=>{
        e.preventDefault();
        //Validar el proyecto

        //agregar el state

        //Reiniciar el formulario

    }
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form className="formulario-nuevo-proyecto"
      onSubmit={onSubmitProyectos}>
          <input 
          type="text"
          className="input-text"
          placeholder="Nombre del Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}/>
          <input 
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"/>
      </form>
    </Fragment>
  );
};

export default NuevoProyectos;
