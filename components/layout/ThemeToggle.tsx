"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            type="button"
            aria-label="Toggle color theme"
            title="Toggle color theme"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-200 transition-colors duration-300 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        >
            <MdOutlineLightMode className="hidden h-6 w-6 rotate-90 dark:block dark:rotate-0" />
            <MdOutlineDarkMode className="block h-6 w-6 rotate-0 dark:hidden dark:-rotate-90" />
        </button>
    );
}
