"use client";

import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-xl p-2 dark:hover:bg-neutral-700 hover:bg-neutral-200"
        >
            <MdOutlineLightMode className="md:h-7.5 md:w-7.5 h-6 w-6 rotate-90 hidden dark:rotate-0 dark:block" />
            <MdOutlineDarkMode className="md:h-7.5 md:w-7.5 h-6 w-6 rotate-0 block dark:-rotate-90 dark:hidden" />
        </button>
    );
}
