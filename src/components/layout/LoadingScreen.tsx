"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 6 ? prev + ". " : ""));
        }, 375);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center">
            <p className="text-xl font-medium">loading {dots}</p>
        </div>
    );
}
