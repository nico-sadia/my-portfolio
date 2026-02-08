"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
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

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <button
                className={`md:m-6 m-2 fixed top-0 left-0 transform translate-x-0 lg:-translate-x-full transition-all duration-300 dark:hover:bg-neutral-700 hover:bg-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-xl p-1`}
                onClick={() => setOpen(!isOpen)}
            >
                <MdMenu className="md:h-7.5 md:w-7.5 h-6 w-6" />
            </button>
            <div
                className={`${isOpen ? "translate-x-0" : "-translate-x-full"} z-50 fixed p-6 top-0 left-0 h-screen w-60 transform lg:translate-x-0 -translate-x-full bg-neutral-50 dark:bg-neutral-900 dark:text-white text-black transition-all duration-300`}
            >
                <aside id="main-sidebar">
                    <div className="flex flex-row font-bold text-xl mb-4 justify-between">
                        <h1 className="text-2xl">nico sadia</h1>
                        <button
                            className={`transition-all duration-200 hover:bg-neutral-200 rounded-md p-1 block lg:hidden`}
                            onClick={() => setOpen(!isOpen)}
                        >
                            <IoMdClose className="h-4 w-4" />
                        </button>
                    </div>
                    <ul>
                        {links.map((link) => (
                            <li
                                className="hover:bg-button-hover-light dark:hover:bg-button-hover-dark"
                                key={link}
                                onClick={() =>
                                    setOpen(isOpen ? !isOpen : isOpen)
                                }
                            >
                                <Link
                                    href={`/${link === "home" ? "" : link}`}
                                    className="text-lime-500 w-full flex"
                                >
                                    {link}
                                    {pathName === `/${link}` && (
                                        <span className="ml-12">{"<"}</span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
            <div
                className={`${isOpen ? "inset-0 fixed bg-black/10 backdrop-blur-sm z-0 h-screen w-screen" : "hidden"}`}
                onClick={() => setOpen(isOpen ? !isOpen : isOpen)}
            ></div>
        </>
    );
}
