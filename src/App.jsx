import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shopContext";
import { Modal } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  /*   const handleClose = () => setShow(false); */
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <ShopContextProvider>
        <Router>
          <NavBar handleShow={handleShow} />
          <Routes>
            <Route
              path="/"
              element={<Shop />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                My Cart
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Cart />
            </Modal.Body>
          </Modal>
        </Router>
      </ShopContextProvider>
    </Fragment>
  );
}

export default App;
