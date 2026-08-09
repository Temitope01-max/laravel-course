import laptop from "../assets/images/laptop.jpg";
import headphones from "../assets/images/headphones.avif";
import smartwatch from "../assets/images/smartwatch.jpg";
import sneaker from "../assets/images/sneaker.avif";
import camera from "../assets/images/camera.jpeg";
import backpack from "../assets/images/backpack.webp";

const latestProducts = [
  {
    id: 1,
    name: "Gaming Laptop",
    category: "Electronics",
    price: 1299,
    image: laptop,
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    price: 199,
    image: headphones,
    rating: 4.7,
    isNew: true
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Accessories",
    price: 249,
    image: smartwatch,
    rating: 4.9,
    isNew: true
  },
  {
    id: 4,
    name: "Running Sneakers",
    category: "Fashion",
    price: 89,
    image: sneaker,
    rating: 4.6,
    isNew: false
  },
  {
    id: 5,
    name: "DSLR Camera",
    category: "Photography",
    price: 999,
    image: camera,
    rating: 4.8,
    isNew: true
  },
  {
    id: 6,
    name: "Travel Backpack",
    category: "Lifestyle",
    price: 79,
    image: backpack,
    rating: 4.5,
    isNew: false
  }
];

export default latestProducts;