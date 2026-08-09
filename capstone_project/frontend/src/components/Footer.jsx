import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">

      <Container>

        <Row className="gy-4">

          {/* Company */}

          <Col lg={4} md={6}>

            <h3 className="fw-bold mb-3 text-success">
              StoreFront
            </h3>

            <p className="text-secondary">
              Shop the latest fashion, electronics,
              home essentials and more at unbeatable
              prices.
            </p>

            <div className="d-flex gap-3 fs-4">

              <FaFacebookF />

              <FaInstagram />

              <FaTwitter />

              <FaLinkedinIn />

            </div>

          </Col>

          {/* Quick Links */}

          <Col lg={2} md={6}>

            <h5 className="mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>

              <li>
                <a href="/shop" className="footer-link">
                  Shop
                </a>
              </li>

              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>

            </ul>

          </Col>

          {/* Categories */}

          <Col lg={2} md={6}>

            <h5 className="mb-3">
              Categories
            </h5>

            <ul className="list-unstyled">

              <li>
                <a href="#" className="footer-link">
                  Electronics
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Fashion
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Shoes
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Beauty
                </a>
              </li>

            </ul>

          </Col>

          {/* Customer Service */}

          <Col lg={2} md={6}>

            <h5 className="mb-3">
              Customer
            </h5>

            <ul className="list-unstyled">

              <li>
                <a href="#" className="footer-link">
                  My Account
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Orders
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Wishlist
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Support
                </a>
              </li>

            </ul>

          </Col>

          {/* Newsletter */}

          <Col lg={2} md={12}>

            <h5 className="mb-3">
              Newsletter
            </h5>

            <p className="text-secondary small">
              Subscribe to receive offers
              and product updates.
            </p>

            <Form>

              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-2"
              />

              <Button
                variant="warning"
                className="w-100"
              >
                Subscribe
              </Button>

            </Form>

          </Col>

        </Row>

        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}

        <Row className="align-items-center">

          <Col md={6} className="text-center text-md-start">

            <small className="text-secondary">
              © {new Date().getFullYear()} ShopEase.
              All Rights Reserved.
            </small>

          </Col>

          <Col
            md={6}
            className="text-center text-md-end fs-2 mt-3 mt-md-0"
          >

            <FaCcVisa className="me-2" />

            <FaCcMastercard className="me-2" />

            <FaCcPaypal className="me-2" />

            <FaCcAmex />

          </Col>

        </Row>

      </Container>

    </footer>
  );
}

export default Footer;
