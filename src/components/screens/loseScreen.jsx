import "../../styles/endScreen.css"

export default function LoseScreen (){
    return (
        <>
            <div className="lose-wrapper">
                <h2>Game Over!</h2>
                <p>You died by the eye.</p>

                <div className="button-wrapper">
                            <button type="button">Retry</button>
                            <button type="button">Exit</button>
                </div>
            </div>

            <div className="lose-bg"></div>
        </>
    )
}