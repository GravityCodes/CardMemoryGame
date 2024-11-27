import "../../styles/endScreen.css"

export default function LoseScreen ({exitBtn, retryBtn}){
    return (
        <>
            <div className="lose-wrapper">
                <h2>Game Over!</h2>
                <p>Garry is displeased with your work.</p>

                <div className="button-wrapper">
                            <button type="button" onClick={retryBtn}>Retry</button>
                            <button type="button" onClick={exitBtn}>Exit</button>
                </div>
            </div>

            <div className="lose-bg"></div>
        </>
    )
}