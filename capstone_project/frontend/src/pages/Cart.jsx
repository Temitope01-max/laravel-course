import React from 'react'
import Layout from '../components/common/Layout'

import shoe from "../assets/images/shoe.avif";
import headphones from "../assets/images/headphones.avif";
import watch from "../assets/images/watch.avif";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Form,
  InputGroup
} from "react-bootstrap";

import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaShoppingBag
} from "react-icons/fa";

const Cart = () => {

    const cartItems = [
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Shoes",
      size: "42",
      color: "Black",
      price: 149,
      quantity: 1,
      image: shoe
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 89,
      quantity: 2,
      image: headphones
    },
    {
      id: 3,
      name: "Classic Wrist Watch",
      category: "Accessories",
      price: 120,
      quantity: 1,
      image: watch
    }
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 200 ? 0 : 15;

  const total = subtotal + shipping;
  return (
    <Layout>
        <div className="container">
          <nav aria-label="breadcrumb" className='py-4'>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>

           <Container className="py-5">

      {/* Page Header */}

      <div className="mb-5">

        <h1 className="fw-bold">
          Shopping Cart
        </h1>

        <p className="text-muted">
          Review your items before checkout.
        </p>

      </div>


      <Row className="g-4">

        {/* =========================
            CART ITEMS
        ========================== */}

        <Col lg={8}>

          <Card className="border-0 shadow-sm">

            <Card.Body>

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h5 className="fw-bold mb-0">
                  Cart Items
                </h5>

                <span className="text-muted">
                  {cartItems.length} Items
                </span>

              </div>


              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="border-bottom pb-4 mb-4"
                >

                  <Row className="align-items-center g-3">

                    {/* Product Image */}

                    <Col xs={4} sm={3} md={2}>

                      <Image
                        src={item.image}
                        rounded
                        fluid
                        style={{
                          height: "100px",
                          width: "100px",
                          objectFit: "cover"
                        }}
                      />

                    </Col>


                    {/* Product Details */}

                    <Col xs={8} sm={5} md={4}>

                      <h6 className="fw-bold mb-1">
                        {item.name}
                      </h6>

                      <small className="text-muted d-block">
                        {item.category}
                      </small>

                      {item.size && (
                        <small className="text-muted d-block">
                          Size: {item.size}
                        </small>
                      )}

                      {item.color && (
                        <small className="text-muted d-block">
                          Color: {item.color}
                        </small>
                      )}

                    </Col>


                    {/* Quantity */}

                    <Col xs={6} sm={4} md={3}>

                      <div className="d-flex align-items-center">

                        <Button
                          variant="outline-secondary"
                          size="sm"
                        >
                          <FaMinus size={10} />
                        </Button>

                        <span className="mx-3 fw-bold">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline-secondary"
                          size="sm"
                        >
                          <FaPlus size={10} />
                        </Button>

                      </div>

                    </Col>


                    {/* Price */}

                    <Col xs={6} md={2}>

                      <h6 className="fw-bold mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </h6>

                      <small className="text-muted">
                        ${item.price} each
                      </small>

                    </Col>


                    {/* Delete */}

                    <Col xs={12} md={1} className="text-md-end">

                      <Button
                        variant="link"
                        className="text-danger p-0"
                      >
                        <FaTrash />
                      </Button>

                    </Col>

                  </Row>

                </div>

              ))}


              {/* Continue Shopping */}

              <Button
                variant="outline-dark"
                href="/shop"
              >

                <FaArrowLeft className="me-2" />

                Continue Shopping

              </Button>

            </Card.Body>

          </Card>

        </Col>


        {/* =========================
            ORDER SUMMARY
        ========================== */}

        <Col lg={4}>

          <Card className="border-0 shadow-sm">

            <Card.Body>

              <h5 className="fw-bold mb-4">
                Order Summary
              </h5>


              {/* Subtotal */}

              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Subtotal
                </span>

                <span className="fw-semibold">
                  ${subtotal.toFixed(2)}
                </span>

              </div>


              {/* Shipping */}

              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Shipping
                </span>

                <span className="fw-semibold">

                  {shipping === 0
                    ? "FREE"
                    : `$${shipping.toFixed(2)}`}

                </span>

              </div>


              <hr />


              {/* Total */}

              <div className="d-flex justify-content-between mb-4">

                <h5 className="fw-bold">
                  Total
                </h5>

                <h5 className="fw-bold text-primary">
                  ${total.toFixed(2)}
                </h5>

              </div>


              {/* Coupon */}

              {/* <h6 className="fw-bold mb-2">
                Have a coupon?
              </h6>

              <InputGroup className="mb-4">

                <Form.Control
                  placeholder="Enter coupon code"
                />

                <Button variant="outline-dark">
                  Apply
                </Button>

              </InputGroup> */}


              {/* Checkout */}

              <Button
                variant="dark"
                size="lg"
                className="w-100"
                href="/checkout"
              >

                <FaShoppingBag className="me-2" />

                Proceed to Checkout

              </Button>


              <p className="text-muted small text-center mt-3 mb-0">
                Secure checkout • Safe payment
              </p>

            </Card.Body>

          </Card>


          {/* Free Shipping Message */}

          {subtotal < 200 && (

            <Card className="border-0 bg-light mt-3">

              <Card.Body className="text-center">

                <p className="mb-0 small">
                  Add{" "}
                  <strong>
                    ${(200 - subtotal).toFixed(2)}
                  </strong>{" "}
                  more to qualify for free shipping.
                </p>

              </Card.Body>

            </Card>

          )}

        </Col>

      </Row>

    </Container>
        </div>
        
    </Layout>
  )
}

export default Cart
