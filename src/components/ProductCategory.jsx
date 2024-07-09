import { shopProducts } from "../products";
import Product from "../pages/shop/Product";
import { Container, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function ProductCategory() {
  return (
    <section>
      <Container className="my-5">
        <div className="my-5 d-sm-flex justify-content-between align-items-center text-center">
          <h2 className="fw-bolder">Sunscreens</h2>
          <button className="btn btn-primary">
            Filter by Category{" "}
            <span
              style={{ borderRadius: "5px" }}
              className="d-inline-block border border-1 border-white py-0 px-1"
            >
              <FaBars />
            </span>
          </button>
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
        ></div>
      </Container>
    </section>
  );
}

export default ProductCategory;
