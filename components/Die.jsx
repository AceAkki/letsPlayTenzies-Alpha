export default function Die(props) {
    let styles = {backgroundColor: props.isHeld ? "#C1E1C1" : "rgba(245, 245, 255, 0.8)"}

    return (
        <button className="die-btn" style={styles} onClick={props.holdDie}>
            {props.value}
        </button>
    )
}