import { useState } from 'react'
import Game from './components/game/game.jsx'
import './styles/App.css'


function App() {
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
      {!playStatus && 
      
      <>
        <h1>Card Memory Game</h1>

        
        <div className="button-wrapper">
          <button type="button" onClick={() => setPlayStatus(true)}>Play</button>
          <button type='button'> How to Play</button>
        </div>
      </>
      }

      {playStatus && <Game exitBtn={() => setPlayStatus(!playStatus)}/>}

    </>
  )

}

export default App
