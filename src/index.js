import "./index.css";
import logo from "./assets/images/logo.png";
// import milk from "./assets/images/milk.jpg";
import ProductCard from "./components/card/card";
import productsData from "./assets/data/products.json";
import Cartline from "./components/cart/cartLine"; 

const PRODUCTS_NODE_ID = "products";
const CART_NODE_ID = "cart";

const cartState = {};
const productsState = {};

document.getElementById("logo").src = logo;

document.addEventListener("change", (e) => {
    // console.log(e.target);
    const index = e.target.id;
    cartState[index] = productsData[index];
    console.log(cartState);
})

Object.entries(productsData).map(entry => {
    const index = entry[0];
    const productData = entry[1];
    const product = new ProductCard({
        _id: index, 
        ...productData
    });
    productsState[index] = product;
    product.render(PRODUCTS_NODE_ID);
});
// console.log(productsArray);