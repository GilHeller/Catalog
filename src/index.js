import "./index.css";
import logo from "./assets/images/logo.png";
import ProductCard from "./components/card/card";
import productsData from "./assets/data/products.json";
import Cartline from "./components/cart/cartLine"; 

const PRODUCTS_NODE_ID = "products";
const CART_NODE_ID = "cartline-items";

const cartState = {};
const productsState = {};

document.getElementById("logo").src = logo;

const printCartLines = () => {
    document.getElementById(CART_NODE_ID).innerHTML = ""
    Object.entries(cartState).map(entry => {
        const index = entry[0];
        const cartlineData = entry[1];
        const props = {
            _id: index, 
            ...cartlineData
        }
        if (props.amount) {
            const cartline =  new Cartline(props);
            cartline.render(index, CART_NODE_ID, props);
        }
    });
}

document.addEventListener("change", (e) => {
    const index = e.target.id;
    const amount = parseInt(e.target.value);
    const product = {
        ...productsState[index],
        amount: amount
    }
    cartState[index] = product;
    printCartLines()
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


