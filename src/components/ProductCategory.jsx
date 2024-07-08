import { shopProducts } from "../products";
import Product from "../pages/shop/Product";
import { Button, Container, Row } from "react-bootstrap";
function ProductCategory() {
  return (
    <section>
      <Container className="mt-5">
        <div>
          <h2>Sunscreens</h2>
        </div>
        <Row className="g-3">
          {shopProducts.map((product) => (
            <Product
              id={product.id}
              name={product.productName}
              image={product.productImage}
              price={product.price}
              stockInfo={product.stockInfo}
              key={product.id}
            />
          ))}
        </Row>
        <div
          style={{ marginTop: "170px" }}
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <Button className="btn btn-success">1</Button>
        </div>
      </Container>
    </section>
  );
}

export default ProductCategory;
