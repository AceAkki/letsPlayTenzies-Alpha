import "../src/Header.css"
import logo from "../src/assets/logo2.png"

export default function Header (props) {
    return (
        <header>
            <div className="logo-wrap">
                <img src={logo} alt="logo" />
            </div>

            <div>
                <h2 className="gameTitle">
                    Tenzies Game
                </h2>
            </div>

            <div>
                <h5 className="userName">
                    {props.name !== "" ? props.name : "Player"}
                </h5>

            </div>

        </header>
    )
}