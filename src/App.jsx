import { useState } from 'react'
import Game from './components/game/game.jsx'
import './styles/App.css'
import "./assets/sounds/bg-music.mp3"
import AudioButton from './components/musicBtn.jsx'
import useSound from 'use-sound';
import btnClickSound from './assets/sounds/btn-click.mp3'
import Instructions from "./components/screens/Instructions.jsx"

function App() {
  const [playStatus, setPlayStatus] = useState(false);
  const [difficultyScreen, setDifficultyScreen] = useState(false);
  const [difficulty, setDifficulty] = useState({});
  const [play] = useSound(btnClickSound, {volume:0.5});
  const [showInstructions, setShowInstructions] = useState(false);


  function difficultyHandler (difficulty) {
      play();
      switch(difficulty) {
        case 'easy':
          setDifficulty({cardsAmount: 6, cardsDisplay: 4});
          break;
        case 'medium':
          setDifficulty({cardsAmount: 10, cardsDisplay: 6});
          break;
        case 'hard':
          setDifficulty({cardsAmount: 16, cardsDisplay: 8});
          break;
      }
      setDifficultyScreen(false);
      setPlayStatus(true);
  }

  function playBtnClickHandler() {
    play();  
    setDifficultyScreen(true);  
  }

  function backBtnClickHandler() {
    play();
    setDifficultyScreen(false);
  }

  function exitBtnHandler () {
    play();
    setPlayStatus(!playStatus);
  }

  function instructionBtnHandler () {
    play();
    setShowInstructions(true);
  }

  function InstructionExitBtnHandler () {
    play();
    setShowInstructions(false);
  }

  return (
    <>

      {!playStatus && 
      
      <>
        <h1>Garry's Card Game</h1>
        {
          !difficultyScreen ? 

          <div className="button-wrapper">
            <button type="button" onClick={playBtnClickHandler}>Play</button>
            <button type='button' onClick={instructionBtnHandler}> How to Play</button>
          </div> :

          <div className='difficulty-button-wrapper'>
              <button type="button" onClick={() => difficultyHandler('easy')}>Easy</button>

              <button type="button" onClick={() => difficultyHandler('medium')}>Medium</button>
              
              <button type="button" onClick={() => difficultyHandler('hard')}> Hard</button>
              
              <button type="button" onClick={backBtnClickHandler}>Back</button>
          </div>

        }
        



      </>
      }

      {playStatus && <Game exitBtn={exitBtnHandler} difficulty={difficulty}/>}
      {showInstructions && <Instructions exitBtn={InstructionExitBtnHandler} />}

      <AudioButton />
    </>
  )

}

export default App
