import React from "react";
import "./styleLanding.css";
import { Link } from "react-router-dom";
import imgg1 from "./asset/imgg1.svg";
import servicio from "./asset/servicio.svg";

const LandingPage = () => {
  return (
    <>
      <div className="bodyP">
        <nav className="navbar navbar-expand-ms">
          <div className="container-fluid CL">
            <img
              classNam="logoL"
              width="310"
              src="https://res.cloudinary.com/dss4kjwzk/image/upload/v1649172010/GestWork/Gestwork_oieal5.png"
              alt=""
            />
          </div>
        </nav>
      </div>

      <section className="home container my-3">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 align-self-center mb-md-0 mb-4 gest">
              <h1 className="title__section my-4">Gestwork.</h1>
              <p className="mb-4 p">
                La importancia de la tecnología en los procesos de gestión y
                comunicación.
              </p>
              <div className="home-btn">
                <Link
                  id="boton"
                  style={{ background: "#05BE50" }}
                  to="/*"
                  className="btn w-50 to d-md-inline-block d-block "
                >
                  <h6 style={{ color: "black" }} className="fw-normal ">
                    Ir App
                  </h6>
                </Link>
              </div>
            </div>
            <div className="col-md-8 align-self-center text-center">
              <div className="home-img">
                <img src={imgg1} alt="" width="450" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="sobre" className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center text-center order-md-1 order-2">
              <img src={servicio} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center order-md-2 order-1 mb-md-0 mb-4">
              <h2 className="title title__section">Servicio </h2>

              <p>
                Es poder tener un lugar de control para gestionar cada proceso y
                cada parte de este; esto es indispensable para un mayor
                crecimiento y tener la posibilidad de darle visibilidad y
                prioridad a tus solicitudes e ideas, con gestwork no hay espacio
                para perdidas de información y así todo tu equipo podrá
                mantenerse conectado en una misma red.
              </p>
              {/* <Link className="btn btn-primary button button-primary"
              >Entre em contato</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div id="servicos" className="block servicios">
        <div className="container">
          <h4 className="title text-center title__section my-4">Beneficios Gestwork</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Tareas más organizadas</h5>
                <p className="mb-0">
                  Poder organizar, es poder optimizar tu tiempo.
                </p>
              </Link>
            </div>

            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Centralizar información</h5>
                <p className="mb-0">Unicamente la información de tu empresa.</p>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Priorizar procesos</h5>
                <p className="mb-0">
                  Poder priorizar tus tareas y asi cumplir a tiempo.
                </p>
              </Link>
            </div>

            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Mayor Gestión</h5>
                <p className="mb-0">
                  Gestiona y optimiza el tiempo de tus colaboradores.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  {/* <div className="col-auto">
            <p className="pt-2">
              <strong></strong>
            </p>
          </div> */}
                </div>
              </form>
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundcolor: "gray" }}>
            © 2022 Team GestWork
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
