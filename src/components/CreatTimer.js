export default function CreatTimer({ name, setName, timer, setTimer, handleSubmit }) {
    return (
        <form className="form-floating" onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">
                    Name
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="name"
                    aria-describedby="addon-wrapping"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <span className="input-group-text" id="addon-wrapping">
                    Timing
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="hh:mm:ss"
                    aria-label="time"
                    aria-describedby="addon-wrapping"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                />
                <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-outline-primary"
                >
                    Add
                </button>
            </div>
        </form>
    );
}