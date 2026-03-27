export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <article className="prose dark:prose-invert w-full flex justify-center max-w-none">
            {children}
        </article>
    );
}
