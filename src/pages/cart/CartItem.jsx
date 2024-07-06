import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

function CartItem({ id, name, image, price }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <article
      style={{
        marginBottom: "15px",
        backgroundColor: "teal",
        width: "33%",
        padding: "10px",
      }}
    >
      <img
        style={{ display: "block" }}
        width="250"
        src={image}
        alt={`Product ID: ${id}`}
      />
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        <p>${price}</p>
        <div>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(event) =>
              updateCartItemCount(Number(event.target.value), id)
            }
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.price,
};
