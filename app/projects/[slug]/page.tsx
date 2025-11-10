import MarkdownIt from "markdown-it";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/projects";

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
        <article className="space-y-2">
            <h1 className="font-semibold">{project.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    );
}
