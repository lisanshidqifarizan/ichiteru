import React from "react";
import "../style/bubbles.css";

const Bubbles = () => {
    const bubbles = Array.from({ length: 20 }); // Jumlah gelembung

    return (
        <div className="bubble-container">
            {bubbles.map((_, index) => (
                <div
                    key={index}
                    className="bubble"
                    style={{
                        left: `${Math.random() * 100}%`, // Posisi horizontal acak
                        animationDelay: `${Math.random() * 5}s`, // Animasi acak
                        animationDuration: `${5 + Math.random() * 5}s`, // Durasi acak
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Bubbles;
