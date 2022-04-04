//procesos activos, subir procesos, chat, asignados 

import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../NavBar';
import './initial.css'
import { Logout, DocumentUpload, Copy, ChatOption } from "grommet-icons";


const InitialMenu = () => {
  return (


    <div>

    <div className="containerAdd">
    <NavBar/>

    </div>
    <div id="servicios" className="container">
      <div className='container'>
        <div className="containe">
          <h4 className="title text-center mb-2 mt-5">Usa Gestwork</h4>
        
        </div>
        <div className="container">
          <div className="row box">
            <div className="col-sm-5 col-md-6 contenido">
              <Link to="/activeProcesses" className="destaque">
                
                <div className="img-container mb-3 icon">
            <DocumentUpload color='green' size="large" />
                  
                </div>
                <div className="text">
                <h5 className="text">Procesos activos</h5>
                <p className="mb-0">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  aut fugiat ut!
                </p>
                </div>
              </Link>
            </div>

            <div className="col-sm-5 col-md-6 box">
              <Link to="/assignedProcesses" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text">Procesos asignados</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm- col-md-6 box">
              <Link to="/addp" className="destaque">
                <div className="img-container mb-3">
                  <img src="" alt="" className="img-fluid" />
                </div>
                <h5 className="text">Subir procesos</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </Link>
            </div>

            <div className="col-sm-1 col-md-6 box">
              <Link to="" className="destaque">
              <div className="img-container mb-3 icon">
            <ChatOption size="large" />
                  
                </div>
                <h5 className="text">Escribele a tu colaboradores</h5>
                <p className="mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default InitialMenu