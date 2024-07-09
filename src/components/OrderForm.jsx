import { Button, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function OrderForm({ setShow }) {
  return (
    <Col
      className="mt-5 border border-1 border-primary mb-5 p-4"
      style={{ borderRadius: "20px" }}
    >
      <div className="my-4">
        <h6>
          <strong>Shipping Information</strong>
        </h6>
      </div>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="formGroupEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formGroupPassword"
        >
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Full Name"
          />
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="State"
          />
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Address"
          />
        </Form.Group>
        <div className="mt-4">
          <p>
            <strong>Payment Details</strong>
          </p>
        </div>
        <Form.Group
          className="mb-3"
          controlId="formGroupEmail"
        >
          <Form.Label>Card Information</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234-1234-1234-1234"
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            controlId="formGridEmail"
          >
            <Form.Control
              type="text"
              placeholder="MM/YY"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Control
              type="text"
              placeholder="CVV"
            />
          </Form.Group>
        </Row>

        <Form.Group
          className="my-5"
          id="formGridCheckbox"
        >
          <Form.Check
            type="checkbox"
            label="Save my card details"
          />
        </Form.Group>
        <Button
          onClick={() => {
            setShow(true);
          }}
          className="w-100"
        >
          Checkout
        </Button>

        <Button
          onClick={() => {
            setShow(true);
          }}
          className="w-100 btn-outline-primary bg-white my-3"
        >
          Checkout with transfer
        </Button>
      </Form>
    </Col>
  );
}

export default OrderForm;

OrderForm.propTypes = {
  setShow: PropTypes.func,
};
