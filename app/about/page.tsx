import IconButton from "@/components/ui/IconButton";
import Link from "@/components/ui/Link";
import ContactModal from "@/features/contact/components/ContactModal";
import { ASSETS } from "@/lib/constants";
import { Github, LinkedIn } from "@/svg/index";
import Image from "next/image";

export default function About() {
    return (
        <main className="space-y-4">
            <section className="flex flex-row gap-4">
                <Image
                    src={ASSETS.icons.nicoPfp}
                    alt="Portrait of Nico Sadia"
                    className="w-48 sm:w-56 lg:w-80"
                    width={250}
                    height={250}
                />

                <div className="flex flex-col gap-4">
                    <IconButton
                        href="https://github.com/nico-sadia"
                        icon={<Github />}
                    />
                    <IconButton
                        href="https://www.linkedin.com/in/nico-sadia/"
                        icon={<LinkedIn />}
                    />

                    <ContactModal />
                </div>
            </section>
            <section className="space-y-2">
                <h1 className="font-semibold">Hello, I{"'"}m Nico.</h1>
                <p>
                    I am a final year student studying Computer Science at the
                    University of Surrey, interested in software engineering and
                    open to graduate roles.
                </p>
                <p>
                    Most of my personal project work so far has been building
                    web applications but I am very keen and open to exploring
                    different kinds of software engineering areas.
                </p>
                <p>
                    As for my personal hobbies, I regularly go gym and play a
                    lot of tft{" "}
                    <Link href="https://www.metatft.com/player/euw/nota-1806">
                        My profile
                    </Link>
                </p>
                <p>Thanks for stopping by!</p>
            </section>
        </main>
    );
}
