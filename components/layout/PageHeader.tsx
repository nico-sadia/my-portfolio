"use client";
import { usePathname } from "next/navigation";

export default function PageHeader() {
    const pathName = usePathname();
    const title = pathName === "/" ? "home" : pathName.replace("/", "");
    return (
        <h1 className="text-lg font-bold">
            <span className="text-xl">{title}</span> // nico.dev
        </h1>
    );
}
