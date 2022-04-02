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
            <img classNam="logoL" width="310" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648513403/GestWork/Free_Sample_By_Wix_1_lvgyss.jpg" alt="" />
          </div>
        </nav>
      </div>

      <section className="home container my-3">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 align-self-center mb-md-0 mb-4 gest">
              <h1>Gestwork.</h1>
              <p className="mb-4">
                {" "}
                La importancia de la tecnología en los procesos de gestión y
                comunicación
              </p>
              <div className="home-btn">
                <Link
                  to="/*"
                  className="btn btn-outline-success to d-md-inline-block d-block"
                >
                  Ir a App
                </Link>
              </div>
            </div>
            <div className="col-md-8 align-self-center text-center">
              <div className="home-img">
                <img src={imgg1} alt="" width='450'className="img-fluid" />
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
              <h2 className="title">¿Qué es Gestwork?</h2>
            
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              {/* <Link className="btn btn-primary button button-primary"
              >Entre em contato</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div id="servicos" className="block servicios">
        <div className="container">
          <h4 className="title text-center">Beneficios Gestwork</h4>
          <h5 className="subtitle text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adips Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Temporibus, dolor!
          </h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Et sumi kapo</h5>
                <p className="mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  aut fugiat ut!
                </p>
              </Link>
            </div>

            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Lorem Ipsun</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Malarum Tor</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </Link>
            </div>

            <div className="col-sm-5 col-md-6">
              <Link to="" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text-uppercase">Aondeai Pocus</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
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
      
          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
              <label className="form-label" for="form5Example2">Email</label>
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Contactanos
            </button>
          </div>
        </div>
      </form>
    </section>

  </div>

  <div className="text-center p-3" style={{backgroundcolor:"gray"}}>
    © 2022
    Team GestWork
  </div>
</footer>

  
</div>
    </>
  );
};

export default LandingPage;
