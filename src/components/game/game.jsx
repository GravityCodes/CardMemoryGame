import { useEffect, useState } from "react";
import fetchDeck from "./fetchDeck";
import '../../styles/game.css'
import regularEye from "../../assets/gif/regularEye.gif"
import deckback from "../../assets/deck-back.png"



export default function Game () {

    const [cards, setCards] = useState(null);
    let visibleCards = cards ? shuffleDeck(cards) : [];

    useEffect(() => {
        let  ignore = false;

        fetchDeck(6).then((result) => {
                result.cards.forEach(card => card.checked = false);
                if(!ignore){
                    setCards(result.cards);
                }     
        });

        return () => {
            ignore  = true;
        }
        
    }, []);
    

    function cardClickHandler(cardId) {
        cards.forEach(card => {
            if(card.code == cardId){
                card.checked = true;
            }
        });
    }

    function shuffleDeck (deck) {
        let visibleCards = [];

        while(visibleCards.length < 4){
            let index = Math.floor(Math.random() * deck.length);
                if(visibleCards != []) {
                    if(visibleCards.some(card => card.code == deck[index].code)){
                        break;
                    }
                }
            visibleCards.push(deck[index]);
        }

        return visibleCards;
    }

    console.log(visibleCards)

    return (
        <>
            {!cards && 
                <div>
                    <img src={regularEye} alt="" />
                </div>
            }
            {visibleCards && 
                <div className="card-container">
                    {visibleCards.map(card => {
                        return <div className="card" key={card.code} onClick={()  =>  cardClickHandler(card.code)}>
                                    <img src={card.image} alt="" />
                                </div>
                    })}
                </div>
            }

            <div className="deck-back">
                <img src={deckback} alt="" />
            </div>

        </>
    )
}