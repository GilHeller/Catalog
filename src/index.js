import "./index.css";
import logo from "./assets/images/logo.png";
import milk from "./assets/images/milk.jpg";
import card from "./components/card/card";
import products from "./assets/data/products.json";

document.getElementById("logo").src = logo;
Object.entries(products).map(entry => {
    const index = entry[0];
    const productData = entry[1];
    card("products", index, productData)
});