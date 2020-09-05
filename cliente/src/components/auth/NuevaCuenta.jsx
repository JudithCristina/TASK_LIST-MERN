import React, { useState } from "react";
import {Link} from "react-router-dom"
const NuevaCuenta = () => {
  //State para iniciar Sesión
  const [usuario, guardarUsuario] = useState({
      name:"",
    email: "",
    password: "",
    confirmar:""
  });
  // extraer de Usuario
  const { name,email, password, confirmar } = usuario;
  const 
  onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
 //Cuando el usuario quiere iniciar sesión
 const onSubmit = e =>{
     e.preventDefault();
     //validar que no haya campos vacios

     //Passsword minimo de 6 caracteres
     //Password iguales
     //Pasarla a action
 }
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear una Cuenta</h1>
        <form onSubmit={onSubmit}>
        <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="tu nombre"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="tu password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Repetir Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>
          <div className="camp-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">Volver a iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;

