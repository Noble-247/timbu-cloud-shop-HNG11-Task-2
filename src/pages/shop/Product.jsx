import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

function Product({ id, name, image, price }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  // Get the amount of the specific item added to the cart
  const cartItemAmount = cartItems[id];

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
      </div>
      <button onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}{" "}
      </button>
    </article>
  );
}

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.price,
};
