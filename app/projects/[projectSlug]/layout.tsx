export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <article className="prose dark:prose-invert w-full max-w-none">
            {children}
        </article>
    );
}
