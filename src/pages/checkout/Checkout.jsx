import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import OrderForm from "../../components/OrderForm";
import MyOrder from "../../components/MyOrder";
import { Link } from "react-router-dom";

function Checkout({ handleShow }) {
  return (
    <Container>
      <div className="mt-5 w-50 mx-auto">
        <Link
          to="/"
          className="btn text-primary fw-bold"
        >
          Product
        </Link>{" "}
        {">>"}
        <Link
          onClick={() => {
            handleShow();
          }}
          className="btn text-primary fw-bold"
        >
          My Cart
        </Link>{" "}
        {">>"}
        <Link className="btn text-primary fw-bold">Checkout</Link> {">>"}
        <Link className="btn text-primary fw-bold">Order Complete</Link>
      </div>
      <Row>
        <Col>
          <MyOrder />
        </Col>
        <Col>
          <OrderForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;

Checkout.propTypes = {
  handleShow: PropTypes.func,
};
