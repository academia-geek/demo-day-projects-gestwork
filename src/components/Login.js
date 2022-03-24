import React from "react";
import { Link } from "react-router-dom";
import g from "../styles/assets/g.jpg.crdownload";
import icon1 from "../styles/assets/icon1.svg";
import  '../styles/StyleLogin.css';

export const Login = () => {
  return (
    <div className="container w-75 bg-light  rounded shadow
    ">
      <div className="row  align-items-stretch" >
        <div className="col bg mt-5 d-none d-lg-block col-xl-6 rounded">

          <img className="bg mt-5" src={icon1} alt="icon1" width='460' />
        </div>
        <div className="col">
          <div className="text-end">
            <h1>GestWork</h1>
          </div>
          <h2 className="fw-bold text-center py-5">Bienvenido</h2>

          {/* login */}
          <form>
            <div className="mb-4">
              <label className="form-label">Correo Electronico</label>
              <input
                className="form-control"
                type="email"
                placeholder="Correo"
                name="email"
                value=""
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Contraseña</label>
              <input
                className="form-control"
                type="password"
                placeholder="Contraseña"
                name="password"
                value=""
              />
            </div>
            <div className="my-3">
              <span>
                {" "}
                No tienes cuenta? <Link to="/register">Registrarte</Link>
              </span>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Iniciar Sesión
              </button>
              <button
                type="submit"
                className="btn btn-outline-danger w-100 my-1"
              >
                <div className="row align-items-center">
                  <div className="col-3 text-center">
                    <img src={g} alt="google" width="45" />
                  </div>
                  <div className="col-6">Inicia con Google</div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
