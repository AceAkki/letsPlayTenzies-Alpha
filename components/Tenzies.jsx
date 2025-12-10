import Die from "./Die"

export default function Tenzies (props) {
    return (
        <>
         <section className="tenzies-game">
            <p>
                <strong>
                    How To Play:
                </strong>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam vero magnam iure repellendus nihil quam, iste nobis, quidem doloribus consectetur alias, illo natus. Architecto eaque commodi quibusdam provident at.
            </p>

            <div className="dice-wrap">
                {props.elemArr}
            </div>

            <button onClick={props.rollBtn}>
                {props.gameStatus? "New Game" : "Roll"}
            </button>
         </section>
        </>
    )
}