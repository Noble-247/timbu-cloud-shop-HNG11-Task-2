import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Col } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";

function Product({ id, name, image, price, stockInfo }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  // Get the amount of the specific item added to the cart
  const cartItemAmount = cartItems[id];

  return (
    <Col
      className="bg-white position-relative"
      sm={12}
      md={4}
    >
      <div className="w-100">
        <img
          src={image}
          className="img-fluid"
        />
      </div>
      <div style={{ lineHeight: "1" }}>
        <p className="mt-2">
          <strong>{name}</strong>
        </p>
        <p className="text-dark">{stockInfo}</p>
        <p>
          <strong>${price}</strong>
        </p>
      </div>
      <button
        style={{
          top: "20px",
          right: "20px",
          border: "none",
          fontSize: "20px",
        }}
        className="position-absolute"
      >
        <BsHeart />
      </button>
      <button
        style={{
          bottom: "130px",
          right: "20px",
          border: "none",
          fontSize: "20px",
          /* border: "1px solid gray",
          borderRadius: "50%", */
        }}
        className="position-absolute"
        onClick={() => addToCart(id)}
      >
        <BiShoppingBag /> {cartItemAmount > 0 && <> ({cartItemAmount})</>}{" "}
      </button>
    </Col>
  );
}

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.func,
  stockInfo: PropTypes.string,
};
