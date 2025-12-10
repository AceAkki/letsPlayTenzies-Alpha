export default function Die(props) {
    let styles = {backgroundColor: props.isHeld ? "#C1E1C1" : "transparent"}

    return (
        <button className="die-btn" style={styles} onClick={props.holdDie}>
            {props.value}
        </button>
    )
}