import { Container, Row, Col, Button } from "react-bootstrap";
import FeaturedProductCard from "../FeaturedProductCard";
import featuredProducts from "../../data/featuredProducts";

function FeaturedProducts() {
  return (
    <Container className="py-5">

      <Row className="align-items-center mb-5">

        <Col md={4}></Col>

        <Col md={4} className="text-center">
          <h6 className="text-warning text-uppercase fw-bold">
            Featured Collection
          </h6>

          <h2 className="fw-bold">
            Handpicked For You
          </h2>

          <p className="text-muted">
            Explore our most popular and recommended products.
          </p>
        </Col>

        <Col md={4} className="text-end">
          <Button variant="outline-dark">
            View All
          </Button>
        </Col>

      </Row>

      <Row className="g-4">

        {featuredProducts.map((product) => (
          <Col lg={3} md={6} sm={12} key={product.id}>
            <FeaturedProductCard product={product} />
          </Col>
        ))}

      </Row>

    </Container>
  );
}

export default FeaturedProducts;