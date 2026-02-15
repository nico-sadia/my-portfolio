import Link from "@/components/ui/Link";
import { ReactNode } from "react";

type IconButtonProps = {
    icon: ReactNode;
    href: string;
};

export default function IconButton({ icon, href }: IconButtonProps) {
    return (
        <div className="w-8 h-8 hover:scale-105">
            <Link href={href}>{icon}</Link>
        </div>
    );
}
