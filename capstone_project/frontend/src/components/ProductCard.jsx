import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaStar, FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <Card className="border-0 shadow-sm h-100">

      <div className="position-relative">

        <Card.Img
          variant="top"
          src={product.image}
          style={{
            height: "260px",
            objectFit: "cover"
          }}
        />

        <Badge
          bg="danger"
          className="position-absolute top-0 start-0 m-2"
        >
          {product.discount} OFF
        </Badge>

      </div>

      <Card.Body>

        <small className="text-muted">
          {product.category}
        </small>

        <Card.Title className="mt-2">
          {product.name}
        </Card.Title>

        <div className="mb-3">

          <span className="fw-bold fs-5 text-primary">
            ${product.price}
          </span>

          <span className="text-muted text-decoration-line-through ms-2">
            ${product.oldPrice}
          </span>

        </div>

        <div className="mb-3">

          <FaStar className="text-warning me-1" />

          {product.rating}

        </div>

        <Button variant="dark" className="w-100">

          <FaShoppingCart className="me-2" />

          Add to Cart

        </Button>

      </Card.Body>

    </Card>
  );
}

export default ProductCard;