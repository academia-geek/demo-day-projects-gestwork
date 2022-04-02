import React from "react";
import "./styleLanding.css";
import { Link } from 'react-router-dom';
import imgg1 from './asset/imgg1.svg';
import servicio from './asset/servicio.svg'

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
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 align-self-center mb-md-0 mb-4">
            
                <h1>Gestwork.</h1>
                <p  className='mb-4'>
                  {" "}
                  La importancia de la tecnología en los procesos de gestión y
                  comunicación
                </p>
                <div className="home-btn">
                  <Link to='/login' className="btn btn-outline-danger to d-md-inline-block d-block  mb-md-0">Ir Link App</Link>
                
              </div>
         
        
          </div>
          <div className="col-md-8 align-self-center text-center">
              <div className='home-img' >
                <img src={imgg1} alt="" className="img-fluid"/>

              </div>
            </div>
        </div>
        </div>

      </section>

      <div id="sobre" className="block">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 align-self-center text-center order-md-1 order-2"
          >
            <img src={servicio} alt=''className="img-fluid"/>
          </div>
          <div
            className="col-md-6 align-self-center order-md-2 order-1 mb-md-0 mb-4"
          >
            <h2 className="title">At vero eos et accusamus et iusto</h2>
            <h4 className="subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            {/* <Link className="btn btn-primary button button-primary"
              >Entre em contato</Link> */}
            
          </div>
        </div>
      </div>
    </div>
    <div id="servicos" className="block">
      <div className="container">
        <h2 className="title text-center">Nuestros servicios</h2>
        <h4 className="subtitle text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adips
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, dolor!

        </h4>
      
      </div>
        <div className="container">
           <div className="row">
          <div className="col-sm-5 col-md-6">
            <Link to='' className="destaque">
              <div className="img-container mb-3">
                <img src="" alt="" className="img-fluid" />
              </div>
              <h5 className="text-uppercase">Et sumi kapo</h5>
              <p className="mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aut fugiat ut!
              </p>
            </Link>
          </div>

            <div className="col-sm-5 col-md-6">
            <Link to="" className="destaque">
              <div className="img-container mb-3">
                <img src=""alt="" className="img-fluid" />
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
            <Link to="#" className="destaque">
              <div className="img-container mb-3">
                <img src="" alt=''className="img-fluid" />
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

    <footer id="contacto">
      <div class="container">
        <div class="email">
          <img src="" alt='' />
          <h2 class="title text-center">Contactanos</h2>
          <h4 class="subtitle text-center mb-4">
            Et sumi kapa namur aondeai rocus pocus est talaraum
          </h4>
          <form>
            <div class="flex-md-grow-1 pr-md-3 pb-md-0 pb-3">
              <label for="email" class="sr-only">Password</label>
              <input
                type="email"
                class="form-control w-100"
                id="email_input"
                placeholder="email"
              />
            </div>
            <div class="flex-grow-1 flex-md-grow-0">
              <button
                type="submit"
                class="btn btn-light button mb-3 d-md-inline d-block w-100"
              >
                cadastre
              </button>
            </div>
          </form>
        </div>
        <div class="logo py-4">
          <div class="row">
            <div class="col-md-6 align-self-center text-md-left text-center">
              <img src="" alt='' class="img-fluid" />
            </div>
            <div class="col-md-6 align-self-center text-right">
              <ul>
                <li>
                  <Link to="#"><img src="assets/facebook.svg" /></Link>
                </li>
                <li>
                  <Link to="#"><img src="assets/twitter.svg" /></Link>
                </li>
                <li>
                  <Link to="#"><img src="assets/instagram.svg" /></Link>
                </li>
                <li>
                  <Link to="#"><img src="assets/linkedin.svg" /></Link>
                </li>
                <li>
                  <Link to="#"><img src="assets/youtube.svg" /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
   
    </>
  );
};

export default LandingPage;
