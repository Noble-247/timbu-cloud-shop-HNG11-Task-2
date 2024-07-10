import { Container, Stack } from "react-bootstrap";
import { productCategories } from "../products";
import { Link } from "react-router-dom";

function ProductCategories() {
  return (
    <Container
      fluid
      className="bg-primary text-white m-0"
    >
      <div className="ps-4 pt-4 pb-3 pt-sm-5">
        <h5 className="pt-sm-3">Category</h5>
      </div>
      {productCategories.map((category) => (
        <Stack
          className="pb-4 ps-4 ps-sm-4 pt-sm-3"
          key={category.id}
          gap={3}
        >
          <div className="py-2">
            <Link className="text-decoration-none">
              {category.categoryName}
            </Link>
          </div>
        </Stack>
      ))}
    </Container>
  );
}

export default ProductCategories;
