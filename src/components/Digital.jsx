import { useEffect, useState } from "react";
import "../style/digital.css";

export default function Digital({ onComplete }) {
    const [minutes, setMinutes] = useState(5); // Menit awal
    const [seconds, setSeconds] = useState(30); // Detik awal
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            } else if (minutes > 0) {
                setMinutes((prev) => prev - 1);
                setSeconds(59);
            } else {
                clearInterval(timer);
                setIsFinished(true);
                setTimeout(onComplete, 1000); // Panggil callback setelah animasi selesai
            }
        }, 20);

        return () => clearInterval(timer);
    }, [minutes, seconds, onComplete]);

    return (
        <div className="digital">
            <div
                className={`countdown ${isFinished ? "finished" : ""}`}
            >
                <p>{String(minutes).padStart(2, "0")}</p>
                <p>:</p>
                <p>{String(seconds).padStart(2, "0")}</p>
            </div>
        </div>
    );
}
