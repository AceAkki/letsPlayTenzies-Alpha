export default function Die(props) {
  let styles = props.isHeld
    ? { backgroundColor: "var(--clr-primary)", color: "var(--clr-secondary-light)" }
    : { backgroundColor: "rgba(245, 245, 255, 0.8)", color: "" };
  return (
    <button className="die-btn" style={styles} onClick={props.holdDie}>
      {props.value}
    </button>
  );
}
