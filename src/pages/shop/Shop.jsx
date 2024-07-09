import { Container, Col, Row } from "react-bootstrap";
import ProductCategories from "../../components/ProductCategories";
import ProductCategory from "../../components/ProductCategory";

function Shop() {
  return (
    <Container fluid>
      <Row>
        <Col
          className="p-0 m-0"
          sm={12}
          md={2}
        >
          <ProductCategories />
        </Col>
        <Col
          sm={12}
          md={10}
        >
          <ProductCategory />
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
