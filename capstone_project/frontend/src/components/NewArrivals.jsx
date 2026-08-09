import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from "../data/products";

function NewArrivals() {
  return (
    <Container className="py-5">

      <div className="text-center mb-5">

        <h6 className="text-primary fw-bold">
          NEW ARRIVALS
        </h6>

        <h2 className="fw-bold">
          Discover Our Latest Products
        </h2>

        <p className="text-muted">
          Fresh arrivals carefully selected just for you.
        </p>

      </div>

      <Row className="g-4">

        {products.map((product) => (

          <Col
            lg={3}
            md={6}
            sm={12}
            key={product.id}
          >

            <ProductCard product={product} />

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default NewArrivals;
