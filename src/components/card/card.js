// import data from "../../assets/data/products.json"

const card = (parentId, key, props) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "product-container";
    cardContainer.key=key;
    console.log(cardContainer);
    cardContainer.innerHTML = (`
        <img id="product-image-test" src="" alt="product-image" class="product-image">
        <div class="product-name">${props?.name || "product"}</div>
        <div class="product-price">${props?.price || "error - no price"}$</div>
    `);
    document.getElementById(parentId).append(cardContainer);
}

export default card
