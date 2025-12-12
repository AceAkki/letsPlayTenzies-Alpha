import "../src/Header.css"
import logo from "../src/assets/logo2.png"

export default function Header (props) {
    return (
        <header>
            {/* <div className="logo-wrap">
                <img src={logo} alt="logo" />
            </div> */}

            <div>
                <h2 className="gameTitle">
                    Tenzies Game
                </h2>
            </div>

            <div className="username-wrap">
                <h5 className="userName">
                    {props.name !== "" ? props.name : null}
                </h5>
                 {props.name !== "" ? <button className="log-out" onClick={props.logoutUser}>Log Out</button> : null}
            </div>

        </header>
    )
}