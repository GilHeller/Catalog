import milk from "../../assets/images/milk.jpg";
import Product from "../product";

export default class Card extends Product{
    constructor(props) {
        super(props);
    }

    handleChange(e) {
            if (this.amount < e.target.value){
                this.amount = this.amount + 1;
                this.handleInc(key, this.amount);
            }
            else if (this.amount > e.target.value){
                this.amount = this.amount - 1;
                this.handleDec(key, this.amount)
            }
    }

    render(parentNodeId) {
        const cardContainer = document.createElement("div");
        cardContainer.className = "product-container";
        cardContainer.key=this._id;
        cardContainer.innerHTML = (`
            <img id="product-image-test" src="${milk}" alt="product-image" class="product-image">
            <div class="product-name">
                <p>${this?.name || "product"}</p>
                <p class="secondary-text">/${this.brand}</p>
            </div>
            <div class="product-price">${parseFloat(this.price).toFixed(2) || "error - no price"}$</div>
            <input type="number" id=${this._id} min="0" value="0" class="product-amount">
        `);
        // .addEventListener("change", this.handleChange);
        document.getElementById(parentNodeId).append(cardContainer);
        // document.getElementById(this._id).addEventListener("change", this.handleChange);
    }
}
