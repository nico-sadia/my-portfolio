"use client";
import Link from "@/components/ui/Link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const links = ["home", "projects", "about", "journal", "changelog"];
    const pathName = usePathname() === "/" ? "/home" : usePathname();
    console.log(pathName);

    return (
        <nav className="flex flex-col w-48 rounded-xs h-full">
            <h1 className="font-bold text-xl mb-4">Nico Sadia</h1>
            <ul>
                {links.map((link) => (
                    <li className="hover:bg-gray-200" key={link}>
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
