import { Container, Stack } from "react-bootstrap";
import { productCategories } from "../products";

function ProductCategories() {
  return (
    <Container
      fluid
      className="bg-primary text-white m-0"
    >
      {productCategories.map((category) => (
        <Stack
          className="pb-4 ps-4 ps-sm-4"
          key={category.id}
          gap={3}
        >
          <div className="py-2">{category.categoryName}</div>
        </Stack>
      ))}
    </Container>
  );
}

export default ProductCategories;
