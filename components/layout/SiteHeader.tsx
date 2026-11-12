"use client";

import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";

export default function SiteHeader() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (previousPathname.current !== pathname) {
            previousPathname.current = pathname;
            setOpen(false);
        }
    }, [pathname]);

    return (
        <>
            <header className="sticky top-0 z-30 -mx-4 flex min-w-0 items-center gap-3 border-b border-neutral-300 bg-neutral-50 px-4 py-2 transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-900 sm:-mx-6 sm:px-6 lg:py-4">
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="main-sidebar"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-200 transition-colors duration-300 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 lg:hidden"
                    onClick={() => setOpen((open) => !open)}
                >
                    <MdMenu className="h-7 w-7" />
                </button>
                <PageHeader />
            </header>
            <Sidebar isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}
