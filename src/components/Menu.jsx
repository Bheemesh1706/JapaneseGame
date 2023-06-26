import { gameStates, useGameStore } from "../store"

export const Menu = () =>{

    const {startGame,gameState} = useGameStore((state)=>({
        startGame:state.startGame,
        gameState:state.gameState
    }));

    return(
        <>
            <div className={`menu ${gameState!=gameStates.MENU?"menu--hidden":""}`}>
                <h1>Kana Game</h1>
                <button onClick={()=>{
                    startGame({mode:"hiragana"})
                }} className="menuButton">
                    Start Hiragana Game
                </button>
                <button className="menuButton"
                onClick={()=>{
                    startGame({mode:"katakana"})
                }}>
                    Start Katakana Game
                </button>
            </div>
        </>
    )
}