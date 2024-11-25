import "../../styles/endScreen.css"

export default function WinScreen (){
    return (
        <>
            <div className="win-wrapper">
                <h2>You Won</h2>
                <p>Garry is satisfied with your work.</p>

                <div className="btn-wrapper">
                            <button type="button">Retry</button>
                            <button type="button">Exit</button>
                </div>
            </div>

            <div className="win-bg"></div>
        </>
    )
}