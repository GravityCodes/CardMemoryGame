import { useEffect, useState } from "react"
import fetchDeck from "./fetchDeck"
import '../../styles/game.css'
import regularEye from "../../assets/gif/regularEye.gif"
import madEye from "../../assets/gif/madEye.gif"
import angryEye from "../../assets/gif/angryEye.gif"
import gameOverEye from "../../assets/gameOverEye.png"
import deckBack from "../../assets/deck-back.png"
import shuffleDeck from "./shuffleDeck"
import fullHeart from "../../assets/hearts/fullHeart.png"
import emptyHeart from "../../assets/hearts/emptyHeart.png"
import LoseScreen from "../screens/loseScreen"
import WinScreen from "../screens/winScreen"


let didInit = false;


export default function Game ({exitBtn, difficulty}) {

    const [cards, setCards] = useState(null);
    const [health, setHealth] = useState(3);
    const [playAgain, setPlayAgain] = useState(false);
    const [flipCard, setFlipCard] = useState(true);
    

    let visibleCards = cards ? shuffleDeck(cards, difficulty.cardsDisplay) : [];
    let counts = cards ? cards.filter(card => card.checked).length : 0;

    
    

    useEffect(() => {
        let  ignore = false;
        if(!didInit){
            fetchDeck(difficulty.cardsAmount).then((result) => {
                result.cards.forEach(card => card.checked = false);
                if(!ignore){
                    setCards(result.cards);
                }     
            });
        }
        
        return () => {
            ignore  = true;
        }
        
    }, [playAgain]);
    

    function cardClickHandler(cardId) {

        toggleFlipCard();


        cards.forEach(card => {
                if(card.code == cardId){
                    if(card.checked == false){
                        card.checked = true;
                    }
                    else {
                        setHealth(health => health - 1);
                    }
                }
        });
        
    }

    function restartGame() {
        setHealth(3);
        setCards(null);
        setPlayAgain(!playAgain);
    }

    function toggleFlipCard() {
        setFlipCard(false); 
        setTimeout(()=> setFlipCard(true), 200);
    }

    return (
        <>

            {!cards && 
                <div className="loading">
                    <img src={regularEye} alt="" />
                </div>
            }
            {cards && 
                <>
                <div className="game-header">
                    <div className="exit-btn-wrapper">
                        <button type="button" onClick={exitBtn}>Exit</button>
                    </div>
                    <div className="loaded">
                        {health == 3 && <img src={regularEye} alt="" />}
                        {health == 2 && <img src={madEye} alt="" />}
                        {health == 1 && <img src={angryEye} alt="" />}
                        {health == 0 && <img src={gameOverEye} alt="" />}
                    </div>
                    <div className="heart-container">
                        <img src={health == 3 ? fullHeart : emptyHeart} alt="" />
                        <img src={health >= 2 ? fullHeart : emptyHeart} alt="" />
                        <img src={health >= 1 ? fullHeart : emptyHeart} alt="" />
                    </div>
                </div>
                <div className="card-container">
                    {visibleCards.map(card => {
                        return <div className={`card ${flipCard ? 'card-flip' : ''}`} key={card.code} onClick={()  =>  cardClickHandler(card.code)}>
                                    <img src={deckBack} className="back" alt="" />
                                    <img src={card.image} className="front" alt="" />
                                </div>
                    })}
                </div>
                <div className="counter">
                    {`${counts} / ${cards.length}`}
                </div>
                </>
            }


            {health == 0 && <LoseScreen exitBtn={exitBtn}  retryBtn={restartGame}/>}
            {cards && counts == cards.length && <WinScreen exitBtn={exitBtn}  retryBtn={restartGame} />}
               
            
        </>
    )
}
