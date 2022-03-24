import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">GestWork</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1"></Nav.Link>
        <Nav.Link href="#action2">Mis Procesos</Nav.Link>
        <Nav.Link href="#" disabled>
         
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <div>
          <h2>Sandra Mercado</h2>
          <p>Jefe de Soluciones y Transformación Social</p>
        </div>
        <div>
          <img src=''/>
          <span>notificacion</span>
        </div>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}