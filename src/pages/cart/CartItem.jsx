import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Col } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";

function CartItem({ id, name, image, price }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Col
      lg="12"
      className="bg-white position-relative"
    >
      <section className="d-flex justify-content-between align-items-center gap-5">
        <div className="w-25 h-75 bg-info d-flex align-items-center justify-content-center">
          <img src={image} />
        </div>
        <div className="w-75">
          <p>
            <strong>{name}</strong>
          </p>
          <p>${price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button
                className="btn btn-outline-primary"
                onClick={() => removeFromCart(id)}
              >
                -
              </button>

              <input
                type="text"
                style={{ width: "35px", padding: "4px", textAlign: "center" }}
                value={cartItems[id]}
                onChange={(event) =>
                  updateCartItemCount(Number(event.target.value), id)
                }
              />
              <button
                className="btn btn-outline-primary"
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>
            <div style={{ paddingRight: "60px" }}>
              <button
                className="btn"
                style={{ fontSize: "25px" }}
              >
                <BiTrash />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Col>
  );
}

export default CartItem;

CartItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.func,
};
