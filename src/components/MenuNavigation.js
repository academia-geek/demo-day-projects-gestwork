import React from "react";
import "../styles/config.css";
import "../styles/MenuNavigation.css";
import { Logout, DocumentUpload, Copy } from "grommet-icons";
import { Link } from "react-router-dom";
import { logoutInitiate } from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

export const MenuNavigation = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutInitiate());
  };

  return (
    <>
      <ul className="menu overflow-hidden">
        <li>
          <Link to="/activeProcesses" className="menu__item">
            <Copy size="large" />
            <label className="ms-3">Procesos Activos</label>
          </Link>
        </li>
        <li>
          <Link to="/" className="menu__item">
            <DocumentUpload size="large" />
            <label className="ms-3">Sube tus Procesos</label>
          </Link>
        </li>
        <li>
          <Link to="/assignedProcesses" className="menu__item">
            <Copy size="large" />
            <label className="ms-3">Procesos Asignados</label>
          </Link>
        </li>
        <li onClick={handleLogout}>
          <Link to="/" className="menu__item menu-logout">
            <Logout size="large" />
            <label className="ms-3">Salir</label>
          </Link>
        </li>
      </ul>

      <Navbar className="menuResponsive" bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                GestWork
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/activeProcesses" className="menu__item">
                  <Copy size="large" />
                  <label className="ms-2">Procesos Activos</label>
                </Link>
              </Nav>
              <Link to="/" className="menu__item">
                <DocumentUpload size="large" />
                <label className="ms-2">Sube tus Procesos</label>
              </Link>
              <li>
                <Link to="/assignedProcesses" className="menu__item">
                  <Copy size="large" />
                  <label className="ms-2">Procesos Asignados</label>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link to="/" className="menu__item menu-logout">
                  <Logout size="large" />
                  <label className="ms-2">Salir</label>
                </Link>
              </li>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
