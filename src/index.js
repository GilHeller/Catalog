import "./index.css";
import apple from "./assets/images/apple.jpg";
import beer from "./assets/images/beer.png";
import cake from "./assets/images/cake.jpg";
import logo from "./assets/images/logo.png";
import chicken from "./assets/images/chicken.png";
import cheese from "./assets/images/cheese.png";
import coffee from "./assets/images/coffee.png";
import cashew from "./assets/images/cashew.png"
import doughnut from "./assets/images/doughnut.png";
import hotdog from "./assets/images/hotdog.png";
import meat from "./assets/images/meat.jpg";
import pancake from "./assets/images/pancake.jpg";
import peanuts from "./assets/images/peanuts.png";
import redWine from "./assets/images/red_wine.png";
import sugar from "./assets/images/sugar.jpg";
import tea from "./assets/images/tea.png";
import water from "./assets/images/water.png";
import wine from "./assets/images/wine.png";
import productsData from "./assets/data/products.json";
import ProductCard from "./components/card";
import Cartline from "./components/cartLine"; 

const PRODUCTS_NODE_ID = "products";
const CART_NODE_ID = "cartline-items";
const TOTAL_PRICE_NODE_ID = "total-price";

const cartState = {};
const productsState = {};

const removeItem = (e) => {
    const _id = e.target.id.split("-")[1];
    cartState[_id].amount = 0;
    document.getElementById(_id).value = 0;
    printCartLines()
}

const printCartLines = () => {
    let totalPrice = 0;
    document.getElementById(CART_NODE_ID).innerHTML = ""
    Object.entries(cartState).map(entry => {
        const index = entry[0];
        const cartlineData = entry[1];
        const props = {
            _id: index, 
            ...cartlineData,
            cartState: cartState
        }
        if (props.amount) {
            totalPrice += props.price * props.amount;
            const cartline = new Cartline(props);
            cartline.render(index, CART_NODE_ID, props);
        }
        document.getElementById(`remove-${index}`)?.addEventListener("click", e => removeItem(e));

    });
    document.getElementById(TOTAL_PRICE_NODE_ID).textContent = `Total price: ${totalPrice.toFixed(2)}$`;
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
