import React, { useState } from "react";
import {Link} from "react-router-dom"
const Login = () => {
  //State para iniciar Sesión
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  // extraer de Usuario
  const { email, password } = usuario;
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

     //Pasarla a action
 }
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
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
          <div className="camp-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">Nueva Cuenta</Link>
      </div>
    </div>
  );
};

export default Login;
