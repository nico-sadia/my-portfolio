"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-xl p-1 dark:hover:bg-neutral-700 hover:bg-neutral-300 bg-neutral-200 dark:bg-neutral-800"
        >
            <MdOutlineLightMode className="md:h-7.5 md:w-7.5 h-6 w-6 rotate-90 hidden dark:rotate-0 dark:block" />
            <MdOutlineDarkMode className="md:h-7.5 md:w-7.5 h-6 w-6 rotate-0 block dark:-rotate-90 dark:hidden" />
        </button>
    );
}
