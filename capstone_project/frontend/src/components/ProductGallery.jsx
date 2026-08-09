import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import shoe1 from "../assets/images/shoe1.avif";
import shoe2 from "../assets/images/shoe2.avif";
import shoe3 from "../assets/images/shoe3.avif";

function ProductGallery() {

  const images = [
    shoe1,
    shoe2,
    shoe3
  ];

  return (
    <>

      <Carousel
        indicators={false}
        interval={null}
      >

        {images.map((image, index) => (

          <Carousel.Item key={index}>

            <Image
              src={image}
              fluid
              rounded
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover"
              }}
            />

          </Carousel.Item>

        ))}

      </Carousel>

      {/* Thumbnails */}

      <div className="d-flex justify-content-center gap-3 mt-3">

        {images.map((image, index) => (

          <Image
            key={index}
            src={image}
            rounded
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer"
            }}
          />

        ))}

      </div>

    </>
  );
}

export default ProductGallery;