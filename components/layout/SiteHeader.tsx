"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";

export default function SiteHeader() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <header className="flex w-full min-w-0 items-center gap-3">
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="main-sidebar"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-200 transition-colors duration-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 lg:hidden"
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
