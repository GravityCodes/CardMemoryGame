import { useState } from 'react'
import Game from './components/game/game.jsx'
import './styles/App.css'


function App() {
  const [playStatus, setPlayStatus] = useState(false);
  const [difficultyScreen, setDifficultyScreen] = useState(false);
  const [difficulty, setDifficulty] = useState({});


  function difficultyHandler (difficulty) {
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


  return (
    <>
      {!playStatus && 
      
      <>
        <h1>Card Memory Game</h1>
        {
          !difficultyScreen ? 

          <div className="button-wrapper">
            <button type="button" onClick={() => setDifficultyScreen(true)}>Play</button>
            <button type='button'> How to Play</button>
          </div> :

          <div className='difficulty-button-wrapper'>
              <button type="button" onClick={() => difficultyHandler('easy')}>Easy</button>

              <button type="button" onClick={() => difficultyHandler('medium')}>Medium</button>
              
              <button type="button" onClick={() => difficultyHandler('hard')}> Hard</button>
              
              <button type="button" onClick={() => setDifficultyScreen(false)}>Back</button>
          </div>

        }
        



      </>
      }

      {playStatus && <Game exitBtn={() => setPlayStatus(!playStatus)} difficulty={difficulty}/>}

    </>
  )

}

export default App
