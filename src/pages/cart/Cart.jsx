import { useContext } from "react";
import { shopProducts } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <main>
      <h1>Your Cart Items</h1>
      <div>
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
      </div>
      {totalAmount > 0 && (
        <div>
          <p>
            <strong>Subtotal: ${totalAmount}</strong>
          </p>
          <button>
            <Link to="/">Continue Shopping</Link>
          </button>
          <button
            onClick={() =>
              window.alert("This Functionality Will Be Added Soon 😎👍")
            }
          >
            Checkout
          </button>
        </div>
      )}
      {totalAmount < 1 && <h1>YOUR CART IS EMPTY</h1>}
    </main>
  );
}

export default Cart;
