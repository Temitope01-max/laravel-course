import shoe from "../assets/images/shoe.avif";
import watch from "../assets/images/watch.avif";
import headphones from "../assets/images/headphones.avif";
import bag from "../assets/images/bag.jpeg";

const products = [
  {
    id: 1,
    name: "Running Sneakers",
    category: "Shoes",
    price: 79.99,
    oldPrice: 99.99,
    image: shoe,
    rating: 4.8,
    discount: "20%"
  },
  {
    id: 2,
    name: "Luxury Wrist Watch",
    category: "Accessories",
    price: 149.99,
    oldPrice: 199.99,
    image: watch,
    rating: 4.7,
    discount: "25%"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    oldPrice: 120.00,
    image: headphones,
    rating: 4.9,
    discount: "30%"
  },
  {
    id: 4,
    name: "Leather Handbag",
    category: "Fashion",
    price: 69.99,
    oldPrice: 89.99,
    image: bag,
    rating: 4.6,
    discount: "15%"
  }
];

export default products;