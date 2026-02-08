import Image from "next/image";
import Link from "../../components/ui/Link";
import ContactModal from "../../features/contact/components/ContactModal";
import { ASSETS } from "../../lib/constants";

export default function About() {
    return (
        <main className="space-y-4">
            <section className="flex flex-row gap-4">
                <div className="w-40 md:w-50 lg:w-80">
                    <Image
                        src={ASSETS.ICONS.NICO.PFP}
                        alt="Portrait of Nico Sadia"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <ul className="space-y-1">
                        <h2 className="font-semibold">links:</h2>
                        <li>
                            <Link href="https://github.com/nico-sadia">
                                github
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/nico-sadia/">
                                linkedin
                            </Link>
                        </li>
                    </ul>
                    <ContactModal />
                </div>
            </section>
            <section className="space-y-2">
                <h1 className="font-semibold">hi, i'm nico.</h1>
                <p>
                    i study computer science at the univeristy of surrey, based
                    in england. i love coding, especially web development.
                </p>
                <p>
                    i started programming in 2020; my first complete and working
                    project was a simple quiz using C#. today, i am focused on
                    developing full stack web applications that are both fun to
                    create and practical.
                </p>
                <p>
                    outside of coding, i regularly go gym + runs and dabble in
                    guitar. my most played game at the moment is tft (
                    <Link href="https://www.metatft.com/player/euw/nota-1806">
                        my account
                    </Link>
                    ), but my favourite game of all time is definitely terraria.
                    i have always been a huge fan of pokemon too and have
                    recently started collecting cards {"->"}
                </p>
                <p>
                    feel free to reach out using the contact form if you'd like
                    to get in touch. thanks for stopping by :)
                </p>
                <p className="text-[8px] mt-8">also watch jjba 👍</p>
            </section>
        </main>
    );
}
