import { ASSETS } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="space-y-2">
                <div className="mt-auto flex flex-col gap-2">
                    <Image
                        src={ASSETS.gallery.panorama}
                        alt="Portrait of Nico Sadia"
                        className="w-full h-auto rounded-md"
                        width={2600}
                        height={913}
                    />
                </div>
                <h1 className="font-bold">Hello! :)</h1>
                <p>
                    I am a final year BSc Computer Science student @ University
                    of Surrey. This site acts as both a portfolio and a place to
                    share things im interested in. Thanks for visiting!
                </p>
                <div className="">
                    <p>
                        The photo above was taken somewhere in Lake District
                        during a trip with friends in 2024.
                    </p>
                    <p>Needed something to fill up space on this page 🥸.</p>
                </div>
            </section>
        </main>
    );
}
