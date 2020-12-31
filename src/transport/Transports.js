import Search from './Search.js';
export default class Transports {
    #tranports = [];
    search = new Search();

    // -----------------------------------------         Get for transport list and function for add transports         ---------------------------------------
    
    addTransport(tranport) {
        this.#tranports.push(tranport);
    }

    getTransports() {
        return this.#tranports;
    }

    // -----------------------------------------         Functionalities         ---------------------------------------

    printTransports() {
        this.#tranports.map( i => {
            console.log(i.getDataAll());
        });
    }

    printMostExpensive() {
        //Analysing the transports' price and return a ordered list 
        let searching = this.search.orderingList(this.getTransports());

        //Highest to lowest
        searching.reverse();

        //Message prepare
        let message = `Vehículo más caro: ${searching[0].getData()}`;
        console.log(message);
    }

    printMostExpensiveAll() {
        //Analysing the transports' price and return a ordered list 
        let searching = this.search.orderingList(this.getTransports());

        //Highest to lowest
        searching.reverse(); //

        //Printing the list
        console.log("Vehículos ordenados por precio de mayor a menor:");
        searching.map(i => console.log(i.getData()));
    }

    printMostCheap() {
        //Analysing the transports' price and return a ordered list 
        let searching = this.search.orderingList(this.getTransports());

        //Message prepare
        let message = `Vehículo más barato: ${searching[0].getData()}`;
        console.log(message);
    }

    searchLetterRepeat(letter) {
        //Searching and counting letter in the transports
        let searching = this.search.searchLetterInList(letter, this.getTransports());

        //Highest to lowest
        searching.reverse();

        //Information in the Message
        let data = searching[0].getData();
        let price = searching[0].getPriceFormat();
        letter.toUpperCase()

        //Create message and printing in console
        let message = `Vehículo que contiene en el modelo la letra ${letter}: ${ data + " " + price}`
        console.log(message);
    }
}