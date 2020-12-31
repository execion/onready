import Transport from "../transport/Transport.js";

export default class Car extends Transport {
    #doors;

    constructor(brand, model, doors, price) {
        super(brand, model, price);
        this.#doors = doors;
    }
    getDataAll() {
        let message = "";
        message += `Marca: ${super.getBrand()} `;
        message += `// Modelo: ${super.getModel()} `;
        message += `// Puertas: ${this.getDoors()} `;
        message += `// Precio: ${super.getPriceFormat()}`;
        return message;
    }
    getDoors() {
        return this.#doors;
    }
}