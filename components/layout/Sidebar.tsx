"use client";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Link from "../ui/Link";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const links = ["home", "projects", "about", "journal", "changelog"];
    const rawPath = usePathname();
    const pathName = rawPath === "/" ? "/home" : "/" + rawPath.split("/")[1];

    return (
        <>
            <div
                className={`fixed left-0 top-0 z-50 h-screen w-60 transform bg-neutral-50 p-6 text-black transition-[transform,background-color,color] duration-300 dark:bg-neutral-900 dark:text-white lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <aside
                    id="main-sidebar"
                    aria-label="Main navigation"
                    className="flex h-full flex-col"
                >
                    <div className="mb-4 flex flex-row items-center justify-between font-bold text-xl">
                        <h1 className="text-2xl">nico sadia</h1>
                        <button
                            type="button"
                            aria-label="Close navigation menu"
                            className="flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 lg:hidden"
                            onClick={onClose}
                        >
                            <IoMdClose className="h-6 w-6" />
                        </button>
                    </div>
                    <ul className="space-y-1">
                        {links.map((link) => {
                            const href = `/${link === "home" ? "" : link}`;
                            const isCurrentPage = rawPath === href;

                            return (
                                <li
                                    className="rounded-md hover:bg-button-hover-light dark:hover:bg-button-hover-dark"
                                    key={link}
                                    onClick={isCurrentPage ? onClose : undefined}
                                >
                                    <Link
                                        href={href}
                                        className="flex min-h-11 w-full items-center rounded-md px-2 text-[16px] text-lime-500"
                                    >
                                        {link}
                                        {pathName === `/${link}` && (
                                            <span className="ml-auto pl-4">
                                                {"<"}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="mt-auto pt-6 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} nico sadia
                    </p>
                </aside>
            </div>
            <div
                className={`${isOpen ? "fixed inset-0 z-40 h-screen w-screen bg-black/10 backdrop-blur-sm" : "hidden"}`}
                onClick={onClose}
            ></div>
        </>
    );
}
