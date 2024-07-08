import PropTypes from "prop-types";
import { Navbar, Nav, Form, Button, Container, Image } from "react-bootstrap";
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
          <Form className="d-flex ms-auto mt-4 mt-md-0">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
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

/*  <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <BiCart />
          </Link>
        </li>
      </ul>
    </nav> */

/* 
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
        >
          <img
            width="100"
            src={Logo}
            className="img-fluid rounded-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavId"
        >
          <form className="d-flex my-2 my-lg-0 ms-auto">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#"
                aria-current="page"
              >
                <BsHeart />
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                <BiShoppingBag />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
              >
                <img
                  width="30"
                  src={Avatar}
                  className="img-fluid rounded"
                  s
                  alt="profile-pic"
                />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownId"
              >
                <a
                  className="dropdown-item"
                  href="#"
                >
                  Action 1
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                >
                  Action 2
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    */
