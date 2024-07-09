import { useContext } from "react";
import { shopProducts } from "../products";
import { ShopContext } from "../context/shopContext";
import { Container, Row } from "react-bootstrap";
import OrderItems from "./MyOrderItems";

function MyOrder() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const shippingCost = 10;

  return (
    <Container
      className="mt-5 border border-1 border-primary mb-5 p-4"
      style={{ borderRadius: "20px" }}
    >
      <div>
        <h6>
          <strong>My Order</strong>
        </h6>
      </div>
      <small>
        <Row className="g-3">
          {shopProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <OrderItems
                  key={product.id}
                  id={product.id}
                  name={product.productName}
                  image={product.productImage}
                  price={product.price}
                />
              );
            }
          })}
        </Row>
        <hr />
        {totalAmount > 0 && (
          <div>
            <p className="d-flex justify-content-between fw-bold">
              <span className="d-block">Subtotal:</span>{" "}
              <span className="d-block"> ${totalAmount}</span>
            </p>
            <p className="d-flex justify-content-between fw-bold">
              <span className="d-block">Shipping:</span>{" "}
              <span className="d-block"> ${shippingCost}</span>
            </p>
            <p className="d-flex justify-content-between fw-bold">
              <span className="d-block">Total:</span>{" "}
              <span className="d-block">${totalAmount + shippingCost}</span>
            </p>
          </div>
        )}
        {totalAmount < 1 && <h1>YOUR CART IS EMPTY</h1>}
      </small>
    </Container>
  );
}

export default MyOrder;
