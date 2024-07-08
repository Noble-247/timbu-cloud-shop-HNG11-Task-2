import { useContext } from "react";
import { shopProducts } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
/* import { Link } from "react-router-dom"; */
import { Container, Row } from "react-bootstrap";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const shippingCost = 10;

  return (
    <Container className="mt-5">
      <small>
        <Row className="g-3">
          {shopProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <CartItem
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
            {/* <button>
            <Link to="/">Continue Shopping</Link>
          </button> */}
            <p className="d-flex justify-content-between fw-bold">
              <span className="d-block">Shipping:</span>{" "}
              <span className="d-block"> ${shippingCost}</span>
            </p>
            <p className="d-flex justify-content-between fw-bold">
              <span className="d-block">Total:</span>{" "}
              <span className="d-block">${totalAmount + shippingCost}</span>
            </p>
            <button
              className="btn btn-primary d-block w-100 mb-5 py-3"
              onClick={() =>
                window.alert("This Functionality Will Be Added Soon 😎👍")
              }
            >
              Continue To Checkout
            </button>
          </div>
        )}
        {totalAmount < 1 && <h1>YOUR CART IS EMPTY</h1>}
      </small>
    </Container>
  );
}

export default Cart;
