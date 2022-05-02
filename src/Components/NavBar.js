import React from "react";
import "./NavBar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="logo fixed-top navbar-height"
    >
      <Container>
        <h4 id="nav-bar-logo">Punto deporte</h4>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Calzado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Indumentaria
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Articulos deportivos
              </NavDropdown.Item>
            </NavDropdown>

            <li class="nav-item " id="dropDown-managment">
              <a class="nav-link" href="#lp-framework">
                Ofertas
              </a>
            </li>

            <li class="nav-item " id="dropDown-managment">
              <a class="nav-link" href="#lp-test-manager">
                Moda
              </a>
            </li>

            <li class="nav-item " id="dropDown-managment">
              <a class="nav-link" href="#lp-report-server">
                Vender
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
