import { shopProducts } from "../products";
import Product from "../pages/shop/Product";
import { Container, Row } from "react-bootstrap";
function ProductCategory() {
  return (
    <section>
      <div>
        <h1>TIMBU CLOUD SHOP</h1>
      </div>
      <Container>
        <Row>
          {shopProducts.map((product) => (
            <Product
              id={product.id}
              name={product.productName}
              image={product.productImage}
              price={product.price}
              key={product.id}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductCategory;
