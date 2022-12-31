import Product from "./product";

export default class Cartline extends Product{
    constructor(props){
        super(props);
        this.amount;
    }

    render(key, parentNodeId, props) {
        const cartLine = document.createElement("div");
        cartLine.className = "cartline";
        cartLine.key = key;
        cartLine.innerHTML = `
            <div class="cartline-image-container"> 
                <img src="${props.image}" alt="product-image" class="cartline-img">
            </div>
            <div class="catline-data">
                <div class="cartline-product">${props.name}</div>
                <div class="cartline-amount">amount: ${props.amount}</div>
                <div class="cartline-total-price">
                    total price: ${(parseFloat(props.amount) * parseFloat(props.price)).toFixed(2)}$
                </div>
                <div class="cartline-price">price per unit: ${parseFloat(props.price).toFixed(2)}$</div>
                <button id="remove-${props._id}" class="cartline-remove">remove item</button>
            </div>
        `;
        document.getElementById(parentNodeId).append(cartLine);

    }
}
