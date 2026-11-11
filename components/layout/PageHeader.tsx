"use client";
import { usePathname } from "next/navigation";

export default function PageHeader() {
    const pathName = usePathname();
    const title = pathName === "/" ? "home" : pathName.replace("/", "");
    return (
        <h1 className="min-w-0 flex-1 break-words text-lg font-bold leading-tight">
            <span className="text-xl">{title}</span> {"//"} nicosadia.me
        </h1>
    );
}
