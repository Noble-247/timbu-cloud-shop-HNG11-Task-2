import { Container, Stack } from "react-bootstrap";
import { productCategories } from "../products";

function ProductCategories() {
  return (
    <Container className="bg-primary text-white m-0">
      {productCategories.map((category) => (
        <Stack
          className="pb-4 ps-1 ps-sm-4"
          key={category.id}
          gap={6}
        >
          <div className="py-4">{category.categoryName}</div>
        </Stack>
      ))}
    </Container>
  );
}

export default ProductCategories;
