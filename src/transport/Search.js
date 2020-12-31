export default class Search {
    orderingList(transportList) {
        let orderList = transportList.sort( 
            (a, b) => (a.getPrice() - b.getPrice())
        );

        return orderList;
    }
    
    searchLetterInList(letter, transportList) {
        let orderList = transportList.sort( 
            (a, b) => (a.getRepeatLetter(letter) - b.getRepeatLetter(letter))
        );
        return orderList;
    }
}