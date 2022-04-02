import React from "react";
import "./styleLanding.css";
import { Link } from 'react-router-dom';
import imgg1 from './asset/imgg1.svg';

const LandingPage = () => {
  return (
    <>
      <div className="bodyP">
        <nav className="navbar navbar-expand-ms">
          <div className="container-fluid CL">
            <img
              classNam="logoL"
              src=""
              alt=""
            />

          </div>
        </nav>
      </div>
      
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-4 align-self-center">
            
                <h1>Gestwork.</h1>
                <p>
                  {" "}
                  La importancia de la tecnología en los procesos de gestión y
                  comunicación
                </p>
                <div className="home-btn">
                  <Link to='/login' className="btn btn-outline-danger to">Ir a App</Link>
                
              </div>
         
        
          </div>
          <div className="col-md-8 align-self-center text-center">
              <div class='home-img' >
                <img src={imgg1} alt="" className="img-fluid"/>

              </div>
            </div>
        </div>
        </div>

      </section>

    </>
  );
};

export default LandingPage;
