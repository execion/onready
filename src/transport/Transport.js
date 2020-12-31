export default class Transport {
    // The class is utlize for avoid to repeat functionalities in the class how Car or Motorbike
    #brand;
    #model;
    #price;

    constructor(brand, model, price) {
        this.#brand = brand;
        this.#model = model;
        this.#price = price;
    }

    getBrand() {
        return this.#brand
    }
    getModel() {
        return this.#model;
    }
    getPrice() {
        return this.#price;
    }

    getData() {
        let message = `${this.getBrand()} ${this.getModel()}`;
        return message;
    }

    getRepeatLetter(letter) { //Search and return an count of letter in the brand and model
        let tempString = this.getBrand() + " " + this.getModel();
        tempString = tempString.toLowerCase().split("");
        let count = 0;
        for(let i of tempString) {
            if(letter.toLowerCase() == i) {
                count++;
            }
        }
        return count;
    }
    
    getPriceFormat() {
        //Convert int or float in money format
        let price = new Intl.NumberFormat('es-AR', {style: "currency", currency:"ARS"}).format(this.getPrice());
        return price;
    }
}