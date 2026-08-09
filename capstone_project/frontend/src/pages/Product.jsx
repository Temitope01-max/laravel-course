import React from 'react'
import Layout from './Layout'

import {
  Container,
  Row,
  Col
} from "react-bootstrap";

import ProductGallery from "../components/ProductGallery";
import ProductDetails from "../components/ProductDetails";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Product = () => {
  return (
    <Layout>
        <div className="container">
          <nav aria-label="breadcrumb" className='py-4'>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="/shop">Shop</a></li>
              <li class="breadcrumb-item active" aria-current="page">Product</li>
            </ol>
          </nav>

        {/* <Container className="py-5"> */}

            <Row className="g-5">

                <Col lg={6}>
                <ProductGallery />
                </Col>

                <Col lg={6}>
                <ProductDetails />
                <hr />
                <div>
                    <strong>SKU: </strong>
                        DDXX234
                </div>
                </Col>

            </Row>

            <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
                <Tab eventKey="home" title="Description">
                    Description
                </Tab>
                <Tab eventKey="profile" title="Reviews (10)">
                    Reviews Area
                </Tab>
            </Tabs>
            

        {/* </Container> */}
        </div>
    </Layout>
  )
}

export default Product