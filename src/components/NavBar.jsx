import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  Form,
  FloatingLabel,
  Container,
  Image,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import ShoppingBag from "../assets/shopping-bag.png";

export default function NavBar({ handleShow }) {
  const iconStyles = {
    width: "40px",
    marginInline: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  };

  return (
    <Navbar
      expand="lg"
      className="bg-primary navbar-dark"
    >
      <Container
        fluid
        className="px-5"
      >
        <NavLink to="/">
          <Image
            width="100"
            src={Logo}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex mt-4 mt-lg-0 ms-lg-5 ps-lg-5">
            <FloatingLabel
              controlId="floatingInput"
              label="Search"
              className="text-white w-100"
            >
              <Form.Control
                style={{ borderRadius: "20px" }}
                type="search"
                placeholder="name@example.com"
                className="bg-transparent text-white ms-0"
              />
            </FloatingLabel>
          </Form>
          <Nav className="ms-auto my-2 my-lg-0">
            <NavLink
              onClick={() => {
                handleShow();
              }}
            >
              <Image
                style={iconStyles}
                src={ShoppingBag}
                rounded
              />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  handleShow: PropTypes.func,
};
