import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <BiCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
