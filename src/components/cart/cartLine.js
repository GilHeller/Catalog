import Product from "../product";

export default class Cartline extends Product{
    constructor(props){
        super(props);
    }

    render(parentNodeId) {
        const cartLine = document.createElement("div");
        cartLine.className = "cartline";
        cartLine.key = key;
        cartLine.innerHTML = `
            <img src="" alt="product-image" class="cartline-img">
            <div class="catline-data">
                <div class="cartline-product">milk</div>
                <div class="cartline-amount">amount: 2</div>
                <div class="cartline-total-price">total price: 9.98</div>
                <div class="cartline-price">price: 4.99</div>
                <button class="cartline-remove">remove item</button>
            </div>
        `;
        document.getElementById(parentNodeId).append(cartLine);
    }
}


// const cartLine = (parentId, key, props) => {
//     const cardContainer = document.createElement("div");
//     cardContainer.className = "cartline-container";
//     cardContainer.key = key;
//     cardContainer.innerHTML = `
        
//     `;
//     document.getElementById(parentId).append(cardContainer);

// }

// export default cartLine;