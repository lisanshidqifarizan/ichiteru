import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import '../App.css'
import Balon from "./Balon";
import Bubbles from "./Bubbles";
import MessageCards from "./MessageCards";

const BirthdayAnimation = () => {
    const [showMessageCards, setShowMessageCards] = useState(false);

    const handleShowMessageCards = () => {
        setShowMessageCards(true);
    };

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

    const Snow = () => {
        const duration = 15 * 1000,
            animationEnd = Date.now() + duration;

        let skew = 1;

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            const timeLeft = animationEnd - Date.now(),
                ticks = Math.max(200, 500 * (timeLeft / duration));

            skew = Math.max(0.8, skew - 0.001);

            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                origin: {
                    x: Math.random(),
                    // since particles fall down, skew start toward the top
                    y: Math.random() * skew - 0.2,
                },
                colors: ["#ffffff"],
                shapes: ["circle"],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4),
            });

            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        })();
    }

    const Star = () => {
        const defaults = {
            spread: 360,
            ticks: 250,
            gravity: 1,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
        };

        function shoot() {
            confetti({
                ...defaults,
                particleCount: 40,
                scalar: 1.2,
                shapes: ["star"],
            });

            confetti({
                ...defaults,
                particleCount: 10,
                scalar: 0.75,
                shapes: ["circle"],
            });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    }

    useEffect(() => {
        leftConfetti();
        rightConfetti();
    }, []);

    return (
        <>
            <div className="container">
                <p className='left' onClick={leftConfetti}>⊐</p>
                <p className='right' onClick={rightConfetti}>⊏</p>
                <p className='up' onClick={Snow}>⊏⊐</p>
                <p className="birthday" onClick={FireWorks}>
                    <a href>Happy</a> Birthday!
                </p>
                <p className="age">
                    {age.toString().split("").map((digit, index, arr) => (
                        <span key={index} className="digit">
                            {digit}
                            {index === arr.length - 1 && <span className="crown" onClick={Star}>👑</span>}
                        </span>
                    ))}
                </p>
                <p className="nama" onClick={handleShowMessageCards} >
                    [ Diena ]
                </p>
                <Balon />
                <Bubbles />
                {showMessageCards && <MessageCards onCloseCard={() => setShowMessageCards(false)} />}
            </div>
        </>
    );
};

export default BirthdayAnimation;