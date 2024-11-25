import { useEffect, useState } from "react";
import fetchDeck from "./fetchDeck";
import '../../styles/game.css'
import regularEye from "../../assets/gif/regularEye.gif"
import deckBack from "../../assets/deck-back.png"
import shuffleDeck from "./shuffleDeck";

let didInit = false;

export default function Game () {

    const [cards, setCards] = useState(null);
    const [count, setCount] = useState(0);

    let visibleCards = cards ? shuffleDeck(cards, 4) : [];

    useEffect(() => {
        let  ignore = false;
        if(!didInit){
            fetchDeck(6).then((result) => {
                result.cards.forEach(card => card.checked = false);
                if(!ignore){
                    setCards(result.cards);
                }     
            });
        }
        
        return () => {
            ignore  = true;
        }
        
    }, []);
    

    function cardClickHandler(cardId) {
        cards.forEach(card => {
            if(card.code == cardId){
                if(card.checked == false){
                    card.checked = true;
                    setCount(count => count + 1);
                }
                
            }
        });
    }

    console.log(cards);

    return (
        <>
            {!cards && 
                <div>
                    <img src={regularEye} alt="" />
                </div>
            }
            {cards && 
                <>
                <div className="card-container">
                    {visibleCards.map(card => {
                        return <div className="card" key={card.code} onClick={()  =>  cardClickHandler(card.code)}>
                                    <img src={card.image} alt="" />
                                </div>
                    })}
                </div>
                <div className="counter">
                    {`${count} / ${cards.length}`}
                </div>
                </>
            }

            <div className="deck-back">
                <img src={deckBack} alt="" />
            </div>

        </>
    )
}