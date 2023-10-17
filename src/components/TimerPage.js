import React, { useState } from "react";

import CreatTimer from './CreatTimer'
import Timer from './Timer'

const demoTimers = [
    {'id': 0, 'name': 'Demo 1', 'time': "00:01:00"},
    {'id': 1, 'name': 'Demo 2', 'time': "00:02:00"},
    {'id': 2, 'name': 'Demo 3', 'time': "00:00:50"},
]


export default function TimerPage() {
    const [name, setName] = useState("");
    const [timer, setTimer] = useState("");

    const [multiTimer, setMultiTimer] = useState(demoTimers);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return;
        const splitTime = timer.split(":");
        console.log(splitTime);
        if (splitTime.length !== 3) {
            console.log(`Invalid 1 ${splitTime.length}`);
            return;
        }
        for (let i = 0; i < splitTime.length; i++) {
            if (parseInt(splitTime[i]) > 60 || parseInt(splitTime[i]) < 0) {
                alert(`Invalid Entry 😔`);
                return;
            }
        }

        setMultiTimer(() => [
            ...multiTimer,
            { id: new Date().getTime(), time: timer, name: name },
        ]);
        setTimer("");
        setName("");
    }

    function handleDelete(id) {
        setMultiTimer((items) => items.filter((item) => item.id !== id));
    }

    return (
        <div className="w-50 h-100 mx-auto">
            <CreatTimer
                name={name}
                setName={setName}
                timer={timer}
                setTimer={setTimer}
                handleSubmit={handleSubmit}
            />
            <ul className="list-group w-75 text-center mx-auto">
                {multiTimer.map((item) => (
                    <Timer
                        id={item.id}
                        initTimer={item.time}
                        setTimer={setTimer}
                        name={item.name}
                        handleDelete={handleDelete}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    );
}