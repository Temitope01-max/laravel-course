import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

function LatestProductCard({ product }) {
  return (
    <Card className="border-0 shadow-sm h-100 product-card">
      <div className="position-relative overflow-hidden">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "250px", objectFit: "cover" }}
        />

        {product.isNew && (
          <Badge bg="success" className="position-absolute top-0 start-0 m-2">
            NEW
          </Badge>
        )}

        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-2 rounded-circle"
        >
          <FaHeart />
        </Button>
      </div>

      <Card.Body>
        <small className="text-muted">{product.category}</small>

        <Card.Title>{product.name}</Card.Title>

        <div className="mb-2">
          <FaStar className="text-warning me-1" />
          {product.rating}
        </div>

        <h5 className="text-primary fw-bold">${product.price}</h5>

        <Button variant="dark" className="w-100 mt-3">
          <FaShoppingCart className="me-2" />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default LatestProductCard;