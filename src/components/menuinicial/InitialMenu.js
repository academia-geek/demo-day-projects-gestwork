//procesos activos, subir procesos, chat, asignados 

import React from 'react'
import { Link } from 'react-router-dom'
import { DocumentUpload, Copy, ChatOption, Attachment } from "grommet-icons";
import './styleinitmenu.css';

import { Container, Form, Navbar } from "react-bootstrap";
import UserPerfil from "../../hooks/UserPerfil";

const InitialMenu = () => {
  const user = UserPerfil();
  console.log(user)

  return (


    <div>

    <div  id='navbarmenu'>

    <Navbar bg="light" className='container-fluid d-flex justify-content-end t-0' id='mm'>
      <Container fluid className='container-fluid d-flex justify-content-end t-0'>
     <Link to='/*'>  <img className="logoImg " style={{marginRight:"710px"}} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648513403/GestWork/Free_Sample_By_Wix_1_lvgyss.jpg" alt=""/>
     </Link>
          <Form className="sub_navBar">
            <Link to="/profile" className="link-name">
            <div className="subtitle_navBar container-fluid d-flex justify-content-end">
              <h4> {user.nombre !== undefined
                  ? user.nombre
                  : (user.nombre = "")}</h4>
            </div>
            </Link>

            <div className="d-flex p-1">
              {user.foto !== undefined 
              ?<img
                className="phone__profile"
                src={user.foto}
             alt='Foto' />
            :(user.foto = "https://res.cloudinary.com/df90q7vvj/image/upload/v1648860811/GestWork/23408e565fc3f43454636fec27572d1f_v8bhk3.jpg")}
            </div>
          </Form>
   
      </Container>
    </Navbar>
 

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