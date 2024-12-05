import { useEffect, useState } from "react";

export default function Digital() {
    const [minutes, setMinutes] = useState(3); // Menit
    const [seconds, setSeconds] = useState(59); // Detik

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            } else if (minutes > 0) {
                setMinutes((prev) => prev - 1);
                setSeconds(59); // Reset detik ke 59
            } else {
                clearInterval(timer); // Hentikan ketika mencapai 00:00:00
            }
        }, 1); // Interval sangat cepat (1 ms)

        return () => clearInterval(timer); // Bersihkan interval saat komponen di-unmount
    }, [minutes, seconds]);

    return (
        <div className="digital" style={{ fontSize: "3rem", textAlign: "center" }}>
            <p>
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </p>
        </div>
    );
}
