import { Card, Form } from "react-bootstrap";

const categories = [
  "Electronics",
  "Fashion",
  "Shoes",
  "Beauty",
  "Furniture",
  "Sports",
  "Groceries",
];

const brands = [
  "Apple",
  "Samsung",
  "Nike",
  "Adidas",
  "Sony",
  "HP",
  "Dell",
];

function ShopSidebar() {
  return (
    <>
      {/* Categories */}

      <Card className="shadow-sm mb-4 border-0">

        <Card.Header className="bg-dark text-white fw-bold">
          Categories
        </Card.Header>

        <Card.Body>

          <Form>

            {categories.map((category, index) => (

              <Form.Check
                key={index}
                type="checkbox"
                label={category}
                className="mb-2"
              />

            ))}

          </Form>

        </Card.Body>

      </Card>

      {/* Brands */}

      <Card className="shadow-sm border-0">

        <Card.Header className="bg-dark text-white fw-bold">
          Brands
        </Card.Header>

        <Card.Body>

          <Form>

            {brands.map((brand, index) => (

              <Form.Check
                key={index}
                type="checkbox"
                label={brand}
                className="mb-2"
              />

            ))}

          </Form>

        </Card.Body>

      </Card>
    </>
  );
}

export default ShopSidebar;
