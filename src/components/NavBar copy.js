import React from "react";
import { Form, Row,Col, Navbar } from "react-bootstrap";
import "../styles/NavBar.css";

export const NavBar = () => {
  return (

      // <h3 className="title_navBar">Mis Procesos</h3>
          <nav className=" container-fluid navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className='container-fluid d-flex justify-content-end'>
            <form className="d-flex">
              <div className="subtitle_navBar form-control me-1">
                <h4>Sandra Mercado</h4>
                <p>Jefe de Soluciones y Transormación Social</p>
              </div>
              <div className="d-flex p-8">
                <img
                  className="phone__profile"
                  src="https://e7.pngegg.com/pngimages/272/184/png-clipart-businessperson-avatar-woman-business-avatar-microphone-black-hair.png"
               alt='' />
             
              </div>
            </form>
            </div>
          </nav>
   
  );
};
