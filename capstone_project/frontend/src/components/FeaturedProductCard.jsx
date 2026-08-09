import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

function FeaturedProductCard({ product }) {
  return (
    <Card className="border-0 shadow-sm featured-card h-100">

      <div className="position-relative overflow-hidden">

        <Card.Img
          src={product.image}
          style={{
            height: "260px",
            objectFit: "cover",
          }}
        />

        <Badge
          bg="warning"
          text="dark"
          className="position-absolute top-0 start-0 m-2"
        >
          {product.badge}
        </Badge>

        <Button
          variant="light"
          className="rounded-circle position-absolute top-0 end-0 m-2"
        >
          <FaHeart />
        </Button>

      </div>

      <Card.Body>

        <small className="text-muted">
          {product.category}
        </small>

        <Card.Title className="mt-2">
          {product.name}
        </Card.Title>

        <div className="mb-2">
          <FaStar className="text-warning me-1" />
          {product.rating}
        </div>

        <div className="mb-3">

          <span className="fw-bold fs-5 text-danger">
            ${product.price}
          </span>

          <span className="text-muted text-decoration-line-through ms-2">
            ${product.oldPrice}
          </span>

        </div>

        <Button variant="dark" className="w-100">
          <FaShoppingCart className="me-2" />
          Add to Cart
        </Button>

      </Card.Body>

    </Card>
  );
}

export default FeaturedProductCard;
