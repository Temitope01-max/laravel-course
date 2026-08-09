import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

// import banner1 from "../assets/banner1.jpg";
import banner1 from "../assets/images/banner1.jpeg";
import banner2 from "../assets/images/banner2.jpeg";

// import banner2 from "../assets/banner2.jpg";

function HeroCarousel() {
  return (
    <Carousel fade interval={4000} pause={false}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          style={{
            height: "600px",
            objectFit: "cover"
          }}
        />

        <Carousel.Caption
          className="text-start"
          style={{ bottom: "25%" }}
        >
          {/* <h5 className="text-warning fw-bold">
            NEW COLLECTION
          </h5> */}

          {/* <h1 className="display-3 fw-bold">
            Shop Smarter,<br />
            Live Better
          </h1> */}

          {/* <p className="fs-5">
            Discover premium fashion, electronics and lifestyle
            products at unbeatable prices.
          </p> */}

          {/* <Button variant="warning" size="lg">
            Shop Now
          </Button> */}

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          style={{
            height: "600px",
            objectFit: "cover"
          }}
        />

        <Carousel.Caption
          className="text-start"
          style={{ bottom: "25%" }}
        >

          {/* <h5 className="text-info fw-bold">
            LIMITED OFFER
          </h5> */}

          {/* <h1 className="display-3 fw-bold">
            Up To 50% Off
          </h1> */}

          {/* <p className="fs-5">
            Save big on our latest arrivals before the offer ends.
          </p> */}

          {/* <Button variant="light" size="lg">
            Explore Deals
          </Button> */}

        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>
  );
}

export default HeroCarousel;