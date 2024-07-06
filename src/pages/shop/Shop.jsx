import { shopProducts } from "../../products";
import Product from "./Product";

function Shop() {
  return (
    <section>
      <div>
        <h1>TIMBU CLOUD SHOP</h1>
      </div>
      <div>
        {shopProducts.map((product) => (
          <Product
            id={product.id}
            name={product.productName}
            image={product.productImage}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Shop;
