import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Col } from "react-bootstrap";

function Product({ id, name, image, price }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  // Get the amount of the specific item added to the cart
  const cartItemAmount = cartItems[id];

  return (
    <Col
      className="bg-white"
      sm={12}
      md={4}
    >
      <div className="w-100 h-75 bg-info d-flex align-items-center justify-content-center">
        <img src={image} />
      </div>
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        <p>${price}</p>
      </div>
      <button onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}{" "}
      </button>
    </Col>
  );
}

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.price,
};
