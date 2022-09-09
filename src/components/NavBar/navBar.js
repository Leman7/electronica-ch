import { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/cartWidget";

export const NavBar = () => {

  const [filter, setFilter] = useState('');

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" >Electronica </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link to="/category/playstation"> Playstation</Link>
              <NavDropdown.Divider />
              <Link to="/category/xbox"> Xbox</Link>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Item className="ml-auto">
              <Link to="/cart"> <CartWidget /></Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder="Buscar" value={filter} onChange={(e) => setFilter(e.target.value)} className="mr-sm-2 ml-auto" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
