import { Container, Row, Col, Button } from "react-bootstrap";
import LatestProductCard from "../LatestProductCard";
// import latestProducts from "../data/latestProducts";
import latestProducts from "../../data/latestProducts";

function LatestProducts() {
  return (
    <Container className="py-5">

      <Row className="align-items-center mb-5">
  <Col md={4}></Col>

  <Col md={4} className="text-center">
    <h6 className="text-primary text-uppercase mb-1">
      Latest Products
    </h6>

    <h2 className="fw-bold mb-0">
      Trending This Week
    </h2>
  </Col>

  <Col md={4} className="text-end">
    <Button variant="outline-dark">
      View All
    </Button>
  </Col>
</Row>

      <Row className="g-4">

        {latestProducts.map(product => (

          <Col
            lg={4}
            md={6}
            sm={12}
            key={product.id}
          >
            <LatestProductCard product={product} />
          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default LatestProducts;