import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import UserPerfil from "../hooks/UserPerfil";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import Notifications from "./Notifications";

export const NavBar = () => {
  const user = UserPerfil();

  return (
    <Navbar
      style={{backgroundColor:"#1c1b1b"}}
      className="container-fluid d-flex justify-content-end t-0"
    >
      <Container
        fluid
        className="container-fluid d-flex justify-content-end t-0"
      >
        
        <Form className="sub_navBar">
          <Link to="/profile" className="link-name">
            <div className="subtitle_navBar container-fluid d-flex justify-content-end">
              <h4 className="nameUser">
                {user.nombre !== undefined ? user.nombre : (user.nombre = "")}
              </h4>
            </div>
          </Link>

          <div className="d-flex p-1">
            {user.foto !== undefined ? (
              <img className="phone__profile" src={user.foto} alt="Foto" />
            ) : (
              (user.foto =
                "https://res.cloudinary.com/dss4kjwzk/image/upload/v1649172010/GestWork/Gestwork_oieal5.png")
            )}
          </div>
          {/* <Notifications/> */}
        </Form>
      </Container>
    </Navbar>
  );
};
