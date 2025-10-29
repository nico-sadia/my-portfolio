import { getProjectBySlug } from "@/lib/projects";
import MarkdownIt from "markdown-it";
import { notFound } from "next/navigation";

const md = new MarkdownIt();

type ProjectDetailsProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
    const slug = (await params).slug;
    const project = getProjectBySlug(slug);

    if (!project) notFound();

    const html = md.render(project.content);

    return (
        <article>
            <h1>{project.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    );
}
