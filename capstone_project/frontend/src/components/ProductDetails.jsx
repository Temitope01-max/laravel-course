import {
    Button,
    Badge,
    Form
} from "react-bootstrap";

import {
    FaStar,
    FaShoppingCart
} from "react-icons/fa";

function ProductDetails() {

    const sizes = [
        "38",
        "39",
        "40",
        "41",
        "42",
        "43"
    ];

    const colors = [
        "#000",
        "#0d6efd",
        "#dc3545",
        "#198754"
    ];

    return (

        <>

            <Badge bg="danger">
                25% OFF
            </Badge>

            <h2 className="fw-bold mt-3">
                Nike Air Max 270
            </h2>

            <div className="mb-3">

                <FaStar className="text-warning" />

                <FaStar className="text-warning" />

                <FaStar className="text-warning" />

                <FaStar className="text-warning" />

                <FaStar className="text-warning" />

                <span className="ms-2">
                    (245 Reviews)
                </span>

            </div>

            <h3 className="text-danger">

                $149

                <small className="text-decoration-line-through text-muted ms-2">

                    $199

                </small>

            </h3>

            <hr />

            <h5>Available Sizes</h5>

            <div className="d-flex flex-wrap gap-2 mb-4">

                {sizes.map(size => (

                    <Button
                        key={size}
                        variant="outline-dark"
                    >

                        {size}

                    </Button>

                ))}

            </div>

            <h5>Available Colors</h5>

            <div className="d-flex gap-3 mb-4">

                {colors.map((color, index) => (

                    <div
                        key={index}
                        style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            background: color,
                            border: "2px solid #ddd",
                            cursor: "pointer"
                        }}
                    />

                ))}

            </div>

            <h5>Quantity</h5>

            <Form.Control
                type="number"
                defaultValue={1}
                min={1}
                style={{ width: "100px" }}
                className="mb-4"
            />

            <div className="d-grid gap-3">

                <Button
                    variant="dark"
                    size="lg"
                    href="/cart"
                >

                    <FaShoppingCart className="me-2" />

                    Add to Cart

                </Button>

                <Button
                    variant="warning"
                    size="lg"
                >

                    Buy Now

                </Button>

            </div>

            <hr />

            <h5>Description</h5>

            <p className="text-muted">

                Premium running sneakers designed for comfort,
                durability and style. Lightweight mesh upper,
                cushioned sole and breathable materials make
                it ideal for everyday use.

            </p>

            <h5>Features</h5>

            <ul>

                <li>Breathable mesh material</li>

                <li>Lightweight rubber sole</li>

                <li>Non-slip outsole</li>

                <li>30-day return policy</li>

            </ul>

        </>

    );
}

export default ProductDetails;