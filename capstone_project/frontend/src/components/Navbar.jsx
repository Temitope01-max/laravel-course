import { useContext } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AdminAuthContext } from "./context/AdminAuth";


function Navigation() {
  const {logout} =useContext(AdminAuthContext)
  
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>

        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold fs-3 text-success">
          StoreFront
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          {/* Left Menu */}
          <Nav className="ms-auto ms-4">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/shop">Shop</Nav.Link>

            <NavDropdown title="Categories">

              <NavDropdown.Item href="#">
                Electronics
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Fashion
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Shoes
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Beauty
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="#">
              Deals
            </Nav.Link>

            <Nav.Link href="#">
              Contact
            </Nav.Link>

          </Nav>

          {/* Icons */}
          <Nav className="align-items-center">

            <Nav.Link href="/cart" className="position-relative">

              <FaShoppingCart size={20} />

              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                3
              </Badge>

            </Nav.Link>

            <NavDropdown
              title={<FaUser />}
              align="end"
            >

              <NavDropdown.Item>
                Profile
              </NavDropdown.Item>

              <NavDropdown.Item>
                Orders
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item onClick={logout}>
                Logout
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;



