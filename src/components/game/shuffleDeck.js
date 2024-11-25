export default function shuffleDeck (deck, iterations) {
    let visibleCards = randomize([], deck, iterations);

    if(!deck.find(cards => cards.checked == false)){
        return visibleCards;
    }

    if(!visibleCards.find(cards => cards.checked == false)){
        visibleCards = shuffleDeck(deck, iterations);
    }

    return visibleCards;
}

function randomize(visibleCards, deck, iterations){   

    while(visibleCards.length < iterations){
        let index = Math.floor(Math.random() * deck.length);
            if(visibleCards != []) {

                while(visibleCards.some(card => card.code == deck[index].code)){
                    index = Math.floor(Math.random() * deck.length);
                }
            }

            visibleCards.push(deck[index]);
        }

        return visibleCards;
    }
    
