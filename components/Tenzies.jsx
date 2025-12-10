import Die from "./Die"

export default function Tenzies (props) {
    return (
        <>
         <section className="tenzies-game">
            <div>
                <strong>
                    How To Play:
                </strong>
                <p>
               In a web-based Tenzies game, you roll 10 dice and choose which ones to keep by clicking on them, aiming to get all dice to match the same number. After each roll, you re-roll the remaining dice and repeat the process, locking in the ones that match your chosen number. The game ends when all 10 dice show the same number, and the player who does this fastest wins.
                    
                </p>

            </div>

            <div className="dice-wrap">
                {props.elemArr}
            </div>

            <button onClick={props.rollBtn} className="roll-btn">
                {props.gameStatus? "New Game" : "Roll"}
            </button>

            {props.gameStatus ? <p>Cogratulations for winning the game.</p> :null }
         </section>
        </>
    )
}