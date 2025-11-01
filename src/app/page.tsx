import ContactModal from "@/features/contact/ContactModal";

export default function Home() {
    return (
        <main>
            <section className="space-y-2">
                <h1 className="font-semibold">welcome to my website :)</h1>
                <p>
                    i am a 2nd-year bsc computer science student @ university of
                    surrey.
                </p>
                <p>this site is a collection of my work and notes.</p>
                <ContactModal />
            </section>
        </main>
    );
}
