import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Notification } from "grommet-icons";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/*">
          <div><img className="logoImg" src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648513403/GestWork/Free_Sample_By_Wix_1_lvgyss.jpg" alt="logo"/></div>
        </Navbar.Brand>
        <h3 className="title_navBar">Mis Procesos</h3>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <Form className="sub_navBar">
            <div className="subtitle_navBar">
              <h4>Sandra Mercado</h4>
              <p>Jefe de Soluciones y Transformación Social</p>
            </div>
            <div className="d-flex p-2">
              <img
                className="phone__profile"
                src="https://e7.pngegg.com/pngimages/272/184/png-clipart-businessperson-avatar-woman-business-avatar-microphone-black-hair.png"
              />
              <span className="icon_notification">
                <Notification />
              </span>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
