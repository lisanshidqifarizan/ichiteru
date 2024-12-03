import React, { useEffect, useState } from "react";
import "../style/balon.css";

const Balon = () => {
    const [balloons, setBalloons] = useState([]);

    // Fungsi untuk menghasilkan balon dengan posisi dan warna acak
    const generateBalloons = () => {
        const colors = ["#FFFFFF", "#9d9d9d", "#FFD700"]
        const randomBalloons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            color: colors[Math.floor(Math.random() * colors.length)], // Warna acak
            left: Math.random() * 100, // Posisi horizontal acak (0-100%)
            delay: Math.random() * 6, // Delay acak untuk animasi (0-5 detik)
        }));
        setBalloons(randomBalloons);
    };

    const animatePath = () => {
        const taliElements = document.querySelectorAll(".tali path");
        taliElements.forEach((path) => {
            let length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.style.animation = "dash 2s linear infinite";
        });
    };

    useEffect(() => {
        generateBalloons();
        animatePath();

    }, []);

    return (
        <div className="container-balon">
            {balloons.map((balloon) => (
                <div
                    key={balloon.id}
                    className="balon"
                    style={{
                        backgroundColor: balloon.color,
                        left: `${balloon.left}%`,
                        animationDelay: `${balloon.delay}s`,
                    }}
                >
                    <svg
                        className="tali"
                        width="10"
                        height="100"
                        viewBox="0 0 10 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 0 Q10 20, 5 40 Q0 60, 5 80 Q10 100, 5 120"
                            stroke="#333"
                            fill="transparent"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default Balon;
