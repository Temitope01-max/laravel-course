import React, { useState } from 'react'
import Layout from './Layout'

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
  InputGroup
} from "react-bootstrap";

import {
  FaCreditCard,
  FaLock,
  FaArrowLeft
} from "react-icons/fa";

import shoe from "../assets/images/shoe.avif";
import headphones from "../assets/images/headphones.avif";

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const handlePaymentMethod = (e) =>{
        setPaymentMethod(e.target.value);
    }

    const orderItems = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 149,
      quantity: 1,
      image: shoe
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 89,
      quantity: 2,
      image: headphones
    }
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 15;
  const tax = subtotal * 0.075;
  const total = subtotal + shipping + tax;

  return (
    <Layout>
        <div className="container">
          <nav aria-label="breadcrumb" className='py-4'>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Checkout</li>
            </ol>
          </nav>

          <Container className="py-5">

      {/* Header */}

      <div className="mb-5">

        <h1 className="fw-bold">
          Checkout
        </h1>

        <p className="text-muted">
          Complete your order securely.
        </p>

      </div>


      <Row className="g-4">

        {/* =====================================
            CHECKOUT FORM
        ====================================== */}

        <Col lg={7}>

          {/* Contact Information */}

          <Card className="border-0 shadow-sm mb-4">

            <Card.Body className="p-4">

              <h5 className="fw-bold mb-4">
                Contact Information
              </h5>

              <Form>

                <Row className="g-3">

                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        First Name
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                      />

                    </Form.Group>

                  </Col>

                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        Last Name
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                      />

                    </Form.Group>

                  </Col>

                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        Email Address
                      </Form.Label>

                      <Form.Control
                        type="email"
                        placeholder="example@email.com"
                      />

                    </Form.Group>

                  </Col>

                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        Phone Number
                      </Form.Label>

                      <Form.Control
                        type="tel"
                        placeholder="+234 800 000 0000"
                      />

                    </Form.Group>

                  </Col>

                </Row>

              </Form>

            </Card.Body>

          </Card>


          {/* =====================================
              SHIPPING INFORMATION
          ====================================== */}

          <Card className="border-0 shadow-sm mb-4">

            <Card.Body className="p-4">

              <h5 className="fw-bold mb-4">
                Shipping Information
              </h5>

              <Form>

                <Form.Group className="mb-3">

                  <Form.Label>
                    Address
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Street address"
                  />

                </Form.Group>


                <Row className="g-3">

                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        City
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="City"
                      />

                    </Form.Group>

                  </Col>


                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        State
                      </Form.Label>

                      <Form.Select>

                        <option>
                          Select state
                        </option>

                        <option>
                          Lagos
                        </option>

                        <option>
                          Abuja
                        </option>

                        <option>
                          Rivers
                        </option>

                        <option>
                          Oyo
                        </option>

                        <option>
                          Enugu
                        </option>

                      </Form.Select>

                    </Form.Group>

                  </Col>


                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        Postal Code
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Postal code"
                      />

                    </Form.Group>

                  </Col>


                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        Country
                      </Form.Label>

                      <Form.Select>

                        <option>
                          Nigeria
                        </option>

                        <option>
                          Ghana
                        </option>

                        <option>
                          Kenya
                        </option>

                      </Form.Select>

                    </Form.Group>

                  </Col>

                </Row>

              </Form>

            </Card.Body>

          </Card>


          {/* =====================================
              PAYMENT
          ====================================== */}

          <Card className="border-0 shadow-sm mb-4">

            <Card.Body className="p-4">

              <h5 className="fw-bold mb-4">
                Payment Method
              </h5>


              <Form.Check
                onClick={handlePaymentMethod}
                type="radio"
                name="payment"
                label="Stripe"
                checked={paymentMethod == 'stripe'}
                value={'stripe'}
                defaultChecked
                className="mb-3"
              />


              <Form.Check
                onClick={handlePaymentMethod}
                type="radio"
                name="payment"
                label="Bank Transfer"
                checked={paymentMethod == 'bt'}
                value={'bt'}
                className="mb-3"
              />


              <Form.Check
                onClick={handlePaymentMethod}
                type="radio"
                name="payment"
                label="Cash on Delivery"
                checked={paymentMethod == 'cod'}
                value={'cod'}
                className="mb-4"
              />


              {/* Card Details */}

              {/* <div className="bg-light p-3 rounded">

                <Form.Group className="mb-3">

                  <Form.Label>
                    Cardholder Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Name on card"
                  />

                </Form.Group>


                <Form.Group className="mb-3">

                  <Form.Label>
                    Card Number
                  </Form.Label>

                  <InputGroup>

                    <InputGroup.Text>
                      <FaCreditCard />
                    </InputGroup.Text>

                    <Form.Control
                      type="text"
                      placeholder="1234 5678 9012 3456"
                    />

                  </InputGroup>

                </Form.Group>


                <Row>

                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        Expiry Date
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="MM/YY"
                      />

                    </Form.Group>

                  </Col>


                  <Col md={6}>

                    <Form.Group>

                      <Form.Label>
                        CVV
                      </Form.Label>

                      <Form.Control
                        type="password"
                        placeholder="123"
                      />

                    </Form.Group>

                  </Col>

                </Row>

              </div> */}

            </Card.Body>

          </Card>


          {/* Terms */}

          <Form.Check
            type="checkbox"
            label="I agree to the Terms & Conditions and Privacy Policy."
            className="mb-4"
          />


          <Button
            variant="dark"
            size="lg"
            className="w-100"
          >

            <FaLock className="me-2" />

            Place Order

          </Button>


          <Button
            variant="link"
            href="/cart"
            className="mt-3 text-dark"
          >

            <FaArrowLeft className="me-2" />

            Return to Cart

          </Button>

        </Col>


        {/* =====================================
            ORDER SUMMARY
        ====================================== */}

        <Col lg={5}>

          <Card className="border-0 shadow-sm">

            <Card.Body className="p-4">

              <h5 className="fw-bold mb-4">
                Your Order
              </h5>


              {/* Products */}

              {orderItems.map((item) => (

                <div
                  key={item.id}
                  className="d-flex align-items-center mb-4"
                >

                  <Image
                    src={item.image}
                    rounded
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover"
                    }}
                  />

                  <div className="ms-3 flex-grow-1">

                    <h6 className="mb-1">
                      {item.name}
                    </h6>

                    <small className="text-muted">
                      Quantity: {item.quantity}
                    </small>

                  </div>

                  <strong>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>

                </div>

              ))}


              <hr />


              {/* Subtotal */}

              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Subtotal
                </span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>

              </div>


              {/* Shipping */}

              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Shipping
                </span>

                <span>
                  ${shipping.toFixed(2)}
                </span>

              </div>


              {/* Tax */}

              <div className="d-flex justify-content-between mb-3">

                <span className="text-muted">
                  Tax
                </span>

                <span>
                  ${tax.toFixed(2)}
                </span>

              </div>


              <hr />


              {/* Total */}

              <div className="d-flex justify-content-between">

                <h5 className="fw-bold">
                  Total
                </h5>

                <h5 className="fw-bold text-primary">
                  ${total.toFixed(2)}
                </h5>

              </div>


              {/* Security */}

              <div className="bg-light rounded p-3 mt-4">

                <small className="text-muted">

                  <FaLock className="me-2 text-success" />

                  Your payment information is encrypted
                  and securely processed.

                </small>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
        </div>
    </Layout>
  )
}

export default Checkout
