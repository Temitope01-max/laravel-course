import laptop from "../assets/images/laptop.jpg";
import phone from "../assets/images/phone.png";
import watch from "../assets/images/watch.avif";
import shoe from "../assets/images/shoe.avif";

const featuredProducts = [
  {
    id: 1,
    name: "MacBook Pro M3",
    category: "Laptop",
    price: 1899,
    oldPrice: 2099,
    image: laptop,
    rating: 4.9,
    badge: "Featured",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    category: "Smartphone",
    price: 1199,
    oldPrice: 1299,
    image: phone,
    rating: 4.8,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Accessories",
    price: 249,
    oldPrice: 299,
    image: watch,
    rating: 4.7,
    badge: "Featured",
  },
  {
    id: 4,
    name: "Nike Air Max",
    category: "Shoes",
    price: 179,
    oldPrice: 220,
    image: shoe,
    rating: 4.8,
    badge: "Trending",
  },
];

export default featuredProducts;