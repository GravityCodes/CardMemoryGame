import { useState } from "react";
import ReactHowler from "react-howler";
import bgMusic from "../assets/sounds/bg-music.mp3"
import musicIcon from "../assets/music.svg"
import muteIcon from "../assets/muted.svg"
export default function AudioButton () {
    const [playStatus, setPlayStatus] = useState(false);
    
    
    return (
        <>

        <ReactHowler playing={playStatus} src={bgMusic} loop={true}/>

        <button onClick={() => setPlayStatus(!playStatus)}
                style={
                    {border: "none",
                     borderRadius: "20px",
                     padding: "10px",
                     backgroundColor:"#f54b4f",
                     margin:"10px"}
                     }>
                    
            <img src={playStatus ? muteIcon : musicIcon } alt="" />
        </button>
        </>
    )

}