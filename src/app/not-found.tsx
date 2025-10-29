import Link from "@/components/ui/Link";
import { R2_BASE_URL } from "@/lib/constants";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-row gap-12">
            <div className="flex flex-col justify-center">
                <h2 className="font-semibold">error 404</h2>
                <h2>page not found</h2>
                <Link href="/">return home</Link>
            </div>
            <Image
                src={`${R2_BASE_URL}/nico.dev/misc/robot_404.png`}
                alt="Error 404 Robot"
                width={300}
                height={300}
            />
        </div>
    );
}
