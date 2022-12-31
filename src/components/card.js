import Product from "./product";

export default class Card extends Product{
    constructor(props) {
        super(props);
    }

    render(parentNodeId) {
        const cardContainer = document.createElement("div");
        cardContainer.className = "product-container";
        cardContainer.key=this._id;
        cardContainer.innerHTML = (`
            <div class="product-image-container">
                <img id="product-image-test" src="${this?.image}" alt="product-image" class="product-image">
            </div>
            <div class="product-name">
                <p>${this?.name || "product"}</p>
                <p class="secondary-text">/${this.brand}</p>
            </div>
            <div class="product-price">${parseFloat(this.price).toFixed(2) || "error - no price"}$</div>
            <input type="number" id=${this._id} min="0" value="0" class="product-amount">
        `);
        document.getElementById(parentNodeId).append(cardContainer);
    }
}
