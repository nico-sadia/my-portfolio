"use client";

import { useTheme } from "next-themes";
import { MdLightMode, MdModeNight } from "react-icons/md";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex flex-row border-2 rounded-4xl p-1"
        >
            <MdLightMode className="h-7.5 w-7.5 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            <MdModeNight className="h-7.5 w-7.5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        </button>
    );
}
