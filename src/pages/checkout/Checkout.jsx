import { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Modal } from "react-bootstrap";
import OrderForm from "../../components/OrderForm";
import MyOrder from "../../components/MyOrder";
import { Link } from "react-router-dom";
import Image from "../../assets/celebrate.png";

function Checkout({ handleShow }) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div className="mt-5 w-100 text-center">
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
          <OrderForm setShow={setShow} />
        </Col>
      </Row>

      {/* CHECKOUT SUCCESS MODAL DIALOG */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 text-center">
            <img
              width="100"
              className="mx-auto"
              src={Image}
              alt="success"
            />
          </div>
          <div className="text-center p-4">
            <h5 className="fw-bolder">Your order is complete!</h5>
            <p>
              You will be receiving an email with your order details and
              shipping information soon
            </p>
            <button
              className="btn btn-primary mt-4"
              type="submit"
            >
              <Link to="/"> Continue Shopping</Link>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Checkout;

Checkout.propTypes = {
  handleShow: PropTypes.func,
};
