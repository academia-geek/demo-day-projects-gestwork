import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import UserPerfil from "../hooks/UserPerfil";
import "../styles/NavBar.css";
import {Link} from 'react-router-dom'


export const NavBar = () => {

  const user = UserPerfil();
  console.log(user)

  return (
    <Navbar bg="light" className='container-fluid d-flex justify-content-end t-0'>
      <Container fluid className='container-fluid d-flex justify-content-end t-0'>
      <img className="logoImg" style={{marginRight:"310px"}} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648513403/GestWork/Free_Sample_By_Wix_1_lvgyss.jpg" alt=""/>

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
  ); 
};
