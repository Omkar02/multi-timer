import React, { useState, useEffect } from "react";

export default function Timer({ id, initTimer, name, handleDelete }) {
    const [timer, setTimer] = useState(initTimer);

    useEffect(() => {
        const timerSplit = timer.split(":");
        const timerDict = {
            hour: timerSplit[0],
            min: timerSplit[1],
            sec: timerSplit[2],
        };
        let totalSeconds =
            parseInt(timerDict.hour) * 3600 +
            parseInt(timerDict.min) * 60 +
            parseInt(timerDict.sec);

        const countdownInterval = setInterval(() => {
            if (totalSeconds >= 0) {
                const hours = Math.floor(totalSeconds / 3600)
                    .toString()
                    .padStart(2, "0");
                const minutes = Math.floor((totalSeconds % 3600) / 60)
                    .toString()
                    .padStart(2, "0");
                const seconds = (totalSeconds % 60).toString().padStart(2, "0");
                console.log(hours, minutes, seconds, totalSeconds);
                setTimer(`${hours}:${minutes}:${seconds}`);

                totalSeconds = totalSeconds - 1;
            } else {
                clearInterval(countdownInterval);
            }
        }, 1000); // Update every 1 second

        return () => {
            clearInterval(countdownInterval);
        };
    }, [timer]);

    return (
        <li
            className={
                timer === "00:00:00"
                    ? "list-group-item list-group-item-danger mt-2 rounded"
                    : "list-group-item list-group-item-success mt-2 rounded"
            }
        >
            <div className="input-group flex-nowrap">
                <span
                    className="fs-4 text-center w-50 fw-bold"
                    id="addon-wrapping"
                >
                    {name}
                </span>
                <span className="w-75 fs-4" id="addon-wrapping">
                    {timer}
                </span>
                <button
                    type="submit"
                    className="btn btn-close p-2"
                    onClick={() => handleDelete(id)}
                >
                
                </button>
            </div>
        </li>
    );
}