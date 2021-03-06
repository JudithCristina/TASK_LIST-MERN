import React, { Fragment, useState, useContext } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyectos = () => {
  //obtener el state del formulario

  const proyectosContext = useContext(ProyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;
  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });
  //Extraer nombre del Proyecto
  const { nombre } = proyecto;
  //Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  //Cuando el usuario enviar un proyecto
  const onSubmitProyectos = (e) => {
    e.preventDefault();
    //Validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar el state
    agregarProyecto(proyecto);

    //Reiniciar el formulario
    guardarProyecto({
      nombre: "",
    });
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form
          className="formulario-nuevo-proyecto"
          onSubmit={onSubmitProyectos}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      { errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>:null}
    </Fragment>
  );
};

export default NuevoProyectos;
