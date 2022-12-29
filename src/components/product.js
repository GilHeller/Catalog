export default class Product{
    constructor(props){
        this._id = props._id;
        this.name = props.name;
        this.brand = props.brand;
        this.price = props.price.toFixed(2);
        this.amount = 0;
    }
}