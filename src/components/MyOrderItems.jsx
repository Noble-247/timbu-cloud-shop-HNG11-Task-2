import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Col } from "react-bootstrap";

function OrderItems({ id, name, image }) {
  const { cartItems } = useContext(ShopContext);

  return (
    <Col
      lg="12"
      className="bg-white position-relative"
    >
      <hr />
      <section className="d-flex justify-content-between align-items-center gap-5">
        <div className="w-50 bg-info d-flex align-items-center justify-content-center">
          <img
            src={image}
            width="100"
          />
        </div>
        <div className="w-75">
          <p>
            <strong>{name}</strong>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p>Qty: {cartItems[id]}</p>
            </div>
          </div>
        </div>
      </section>
    </Col>
  );
}

export default OrderItems;

OrderItems.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.any,
  price: PropTypes.func,
};
