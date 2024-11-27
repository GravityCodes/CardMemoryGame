import "../../styles/endScreen.css"

export default function WinScreen ({exitBtn, retryBtn}){
    return (
        <>
            <div className="win-wrapper">
                <h2>You Won !</h2>
                <p>Garry is satisfied with your work.</p>

                <div className="button-wrapper">
                            <button type="button" onClick={retryBtn}>Play Again</button>
                            <button type="button" onClick={exitBtn}>Exit</button>
                </div>
            </div>

            <div className="win-bg"></div>
        </>
    )
}