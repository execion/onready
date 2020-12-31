import Transport from "../transport/Transport.js";

export default class Motorbike extends Transport {  
    #displacement;
    constructor(brand, model, displacement, price){
        super(brand, model, price);
        this.#displacement = displacement;
        
    }
    getDataAll() {
        let message = "";
        message += `Marca: ${super.getBrand()} `;
        message += `// Modelo: ${super.getModel()} `;
        message += `// Cilindrada: ${this.getDisplacement()}cc `;
        message += `// Precio: ${super.getPriceFormat()}`;
        return message;
    }
    
    getDisplacement() {
        return this.#displacement;
    }
}