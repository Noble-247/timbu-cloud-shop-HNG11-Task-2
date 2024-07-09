import { Col, Container, Row } from "react-bootstrap";
import OrderForm from "../../components/OrderForm";
import MyOrder from "../../components/MyOrder";

function Checkout() {
  return (
    <Container>
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
