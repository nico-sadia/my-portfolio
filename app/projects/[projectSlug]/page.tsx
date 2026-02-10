import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { ProjectMeta } from "../../../types";

export const generateMetadata = async ({
    params,
}: {
    params: { projectSlug: string };
}) => {
    const { projectSlug } = await params;
    const source = await fs.readFile(
        path.join(process.cwd(), "content/projects", `${projectSlug}.mdx`),
        "utf-8",
    );

    const { frontmatter } = await compileMDX<{ title: string }>({
        source,
        options: { parseFrontmatter: true },
    });
    return {
        title: frontmatter.title,
    };
};

export default async function Projects({
    params,
}: {
    params: { projectSlug: string };
}) {
    const { projectSlug } = await params;
    const source = await fs.readFile(
        path.join(process.cwd(), "content/projects", `${projectSlug}.mdx`),
        "utf-8",
    );

    const { content, frontmatter } = await compileMDX<ProjectMeta>({
        source,
        options: { parseFrontmatter: true },
    });

    return (
        <div className="wrapper">
            <h1>{frontmatter.title}</h1>
            {content}
        </div>
    );
}
