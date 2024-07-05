import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Fragment>
      <Router>
        <NavBar />
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
      </Router>
    </Fragment>
  );
}

export default App;
