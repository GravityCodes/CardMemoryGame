import "../../styles/instructions.css"

export default function LoseScreen ({exitBtn}){
    return (
        <>
            <div className="instructions-wrapper">
                <h2>Rules</h2>
                <p>1. Remember All the cards you pick.</p>
                <p>2. Do not pick the same card twice.</p>

                <div className="button-wrapper">
                    <button type="button" onClick={exitBtn}>Exit</button>
                </div>
            </div>

            <div className="instructions-bg"></div>
        </>
    )
}