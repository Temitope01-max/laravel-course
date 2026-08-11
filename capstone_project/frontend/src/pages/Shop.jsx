import React from 'react'
import Layout from '../components/common/Layout'
import HeroCarousel from '../components/HeroCarousel'

import { Container, Row, Col } from "react-bootstrap";
import ShopSidebar from "../components/ShopSidebar";
import products from "../data/products";

import ProductCard from '../components/ProductCard';

// import ProductGrid from "../components/ProductGrid";

const Shop = () => {
  return (
    <Layout>
      {/* <HeroCarousel
        // title="Shop"
      /> */}

        <div className="container">
          <nav aria-label="breadcrumb" className='py-4'>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Shop</li>
            </ol>
          </nav>

          <Row>

        {/* Sidebar */}

        <Col lg={3} md={4}>
          <ShopSidebar />
        </Col>

        {/* Products */}

        <Col lg={9} md={8}>

          <Row className="g-4">

        {products.map((product) => (

          <Col
            lg={3}
            md={6}
            sm={12}
            key={product.id}
          >

            <ProductCard product={product} />

          </Col>

        ))}

      </Row>
        </Col>

      </Row>
      
        </div>
    </Layout>
  )
}

export default Shop