import React, { useEffect } from "react";
import confetti from "canvas-confetti";

import '../App.css'
import Balon from "./Balon";
import Bubbles from "./Bubbles";
import Digital from "./Digital";

const BirthdayAnimation = () => {
    const tanggal = 6; // Tanggal lahir
    const bulan = 11; // Bulan lahir (Desember adalah 11 karena indeks bulan dimulai dari 0)
    const tahun = 2006; // Tahun lahir

    const today = new Date(); // Tanggal hari ini
    const birthDate = new Date(tahun, bulan, tanggal); // Tanggal lahir

    // Hitung umur dalam tahun
    let age = today.getFullYear() - birthDate.getFullYear();

    // Koreksi jika belum melewati ulang tahun tahun ini
    const isBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!isBirthdayPassed) {
        age--;
    }

    console.log(`Umur saat ini: ${age} tahun`);

    const leftConfetti = () => {
        const end = Date.now() + 16 * 1000; // Efek berlangsung selama 15 detik
        const colors = ["#000000", "#ffffff", "#ffee00"]; // Warna confetti

        (function left() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 100,
                origin: { x: 0 }, // Dari sisi kiri
                colors: colors,
                resize: true,
            });

            if (Date.now() < end) {
                requestAnimationFrame(left);
            }
        })();
    };

    const rightConfetti = () => {
        const end = Date.now() + 16 * 1000; // Efek berlangsung selama 15 detik
        const colors = ["#000000", "#ffffff", "#ffee00"]; // Warna confetti

        (function right() {
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 100,
                origin: { x: 1 }, // Dari sisi kanan
                colors: colors,
                resize: true,
            });

            if (Date.now() < end) {
                requestAnimationFrame(right);
            }
        })();
    };

    const FireWorks = () => {
        const duration = 15 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    }


    useEffect(() => {
        leftConfetti();
        rightConfetti();
    }, []);

    return (
        <>
            <div className="container">
                <p className='left' onClick={leftConfetti}>&lt;</p>
                <p className='right' onClick={rightConfetti}>&gt;</p>
                <p className="birthday">
                    <a href>Happy</a> Birthday!
                </p>
                <p className="age">
                    {age.toString().split("").map((digit, index, arr) => (
                        <span key={index} className="digit">
                            {digit}
                            {index === arr.length - 1 && <span className="crown">👑</span>}
                        </span>
                    ))}
                </p>
                <p className="nama">
                    [ Diena ]
                </p>
                <Balon />
                <Bubbles />
                <p onClick={FireWorks}>FireWorks!</p>
                <Digital />
            </div>
        </>
    );
};

export default BirthdayAnimation;