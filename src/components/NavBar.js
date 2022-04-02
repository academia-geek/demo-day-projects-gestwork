import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import UserPerfil from "../hooks/UserPerfil";
import "../styles/NavBar.css";



export const NavBar = () => {

  const user = UserPerfil();
  console.log(user)

  return (
    <Navbar bg="light" className='container-fluid d-flex justify-content-end t-0'>
      <Container fluid className='container-fluid d-flex justify-content-end t-0'>
      <img style={{marginRight:"420px"}} src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648513403/GestWork/Free_Sample_By_Wix_1_lvgyss.jpg" alt=""/>

          <Form className="sub_navBar">
            <div className="subtitle_navBar container-fluid d-flex justify-content-end">
              <h4> {user.nombre !== undefined
                  ? user.nombre
                  : (user.nombre = "")}</h4>
              <h4> {user.cargo !== undefined
                  ? user.cargo
                  : (user.cargo = "")}</h4>
            </div>
            <div className="d-flex p-1">
              <img
                className="phone__profile"
                src={user.foto}
             alt='Foto' />
             
            </div>
          </Form>
   
      </Container>
    </Navbar>
  ); 
};
