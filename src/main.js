import Car from './car/Car.js';
import Motorbike from './motorbike/Motorbike.js';
import Transports from './transport/Transports.js';

const main = () => {

    //Create transports
    const peugeot206 = new Car("Peugeot", "206", 4, 200000);
    const hondaTitan = new Motorbike("Honda", "Titan", 125, 60000);
    const peugeot208 = new Car("Peugeot", "208", 5, 250000);
    const yamahaYbr = new Motorbike("Yamaha", "YBR", 160, 80500.50);

    //The object transport is utilize for actions
    const transports = new Transports();


    //Adding transports
    transports.addTransport(peugeot206);
    transports.addTransport(hondaTitan);
    transports.addTransport(peugeot208);
    transports.addTransport(yamahaYbr);

    //Printing requisites
    transports.printTransports();

    separator();

    transports.printMostExpensive();
    transports.printMostCheap();
    transports.searchLetterRepeat("Y");

    separator()

    transports.printMostExpensiveAll();
}

function separator() {
    const bar = "============================="
    console.log(bar);
}

main();