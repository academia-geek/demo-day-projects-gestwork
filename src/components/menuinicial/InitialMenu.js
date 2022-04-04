//procesos activos, subir procesos, chat, asignados 

import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../NavBar'
import { DocumentUpload, Copy, ChatOption, Attachment } from "grommet-icons";
import './styleinitmenu.css';

const InitialMenu = () => {
  return (


    <div>

    <div className="containerAdd navbarmenu">

    <NavBar/>

    </div>
    <div id="servicios" className="block servicios">
        <div className="container">
          <h4 className="title text-center">Usa Gestwork</h4>
   
        </div>
        <div className="container">
          <div className="row box">
            <div className="col-sm-5 col-md-6 contenido">
              <Link to="/activeProcesses" className="destaque">
                
                <div className="img-container mb-3 icon">
                <Copy size="large" color='green'/>
                  
                </div>
                <div className="text">
                <h5 className="text">Procesos activos</h5>
                <p className="mb-0">
                  Podras ver todo lo que debes resolver de forma ugente.
                </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-5 col-md-6">
              <Link to="assignedProcesses" className="destaque">
                <div className="img-container mb-3">
                <Attachment size="large" color='green'/>
                </div>
                <h5 className="text">Procesos asignados</h5>
                <p className="mb-0">
                 Cuanta tarea tienes por resolver
                </p>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Link to="/addp" className="destaque">
              <div>
            <DocumentUpload size="large" color='green'/>

              </div>
                <h5 className="text">Subir procesos</h5>
                <p className="mb-0">
                  Sube y asigna procesos                </p>
              </Link>
           
            </div>

            <div className="col-sm-5 col-md-6">
              <Link to="addp" className="destaque">
              <div className="img-container mb-3 icon">
            <ChatOption size="large"color='green' />
                  
                </div>
                <h5 className="text">Escribele a tus colaboradores</h5>
                <p className="mb-0">
                  Ponte en contacto con tus compañeros
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default InitialMenu