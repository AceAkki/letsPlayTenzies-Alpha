export default function Form (props) {
    return (
        <form action={props.submit}>
            <label htmlFor="username">Gamer Name</label>
            <input
                name="username"
                id="username"
                placeholder="Type Username"
            />
            <button className="form-btn">Submit</button>
        </form>
    )
}