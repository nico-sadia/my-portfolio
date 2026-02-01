"use client";
import { usePathname } from "next/navigation";
import Link from "../ui/Link";

export default function Sidebar() {
    const links = [
        "home",
        "projects",
        "about",
        "journal",
        "pokemon",
        "changelog",
    ];
    const rawPath = usePathname();
    const pathName = rawPath === "/" ? "/home" : "/" + rawPath.split("/")[1];

    return (
        <nav className="flex flex-col w-48 rounded-xs h-full space-y-2">
            <h1 className="font-bold text-xl mb-4">nico sadia</h1>
            <ul>
                {links.map((link) => (
                    <li
                        className="hover:bg-button-hover-light dark:hover:bg-button-hover-dark"
                        key={link}
                    >
                        <Link
                            href={`/${link === "home" ? "" : link}`}
                            className="text-lime-500 w-full flex"
                        >
                            {link}
                            {pathName === `/${link}` && (
                                <span className="ml-auto">{"<"}</span>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
