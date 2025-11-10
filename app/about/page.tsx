import Image from "next/image";
import Link from "../../components/ui/Link";
import ContactModal from "../../features/contact/ContactModal";
import { R2_BASE_URL } from "../../lib/constants";

export default function About() {
    return (
        <main className="space-y-4">
            <section className="flex flex-row gap-4">
                <Image
                    src={`${R2_BASE_URL}/nico.dev/icons/Nico-Sadia-PFP.jpg`}
                    alt="Portrait of Nico Sadia"
                    width={250}
                    height={250}
                />
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
                    i am a computer science student at the univeristy of surrey,
                    based in england. i have a deep passion for coding and
                    building projects that are both practical and enjoyable to
                    create.
                </p>
                <p>
                    as a child, i have always loved gaming and in particular,
                    games that utilised your creativity. when i was introduced
                    to scratch, a platform where you could build your own games
                    from nothing, i was fascinated. later, i moved on to unity,
                    my first instance of writing actual code. i hated it at
                    first - it was a giant step up from drag-and-drop code
                    blocks - but once i was able to understand the basics and
                    bring my ideas to life, i couldn't stop.
                </p>
                <p>
                    these days, my main interest is now in developing full stack
                    web apps, prioritising maintainability and good practices
                    wherever i can. recently, i have been focusing on an
                    automated spotify song saver - a project that brings
                    together several technologies, you can check it out in the
                    projects section of this website!
                </p>
                <p>
                    outside of coding, i love to stay active by regularly going
                    gym and on runs. I still of course indulge in gaming, but
                    more on a casual level compared to my younger self.
                </p>
                <p>
                    feel free to reach out via email if you'd like to get in
                    touch. thanks for stopping by :)
                </p>
            </section>
        </main>
    );
}
