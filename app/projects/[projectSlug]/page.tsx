import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import Link from "../../../components/ui/Link";
import { ASSETS } from "../../../lib/constants";
import { useMDXComponents } from "../../../mdx-components";
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
        options: { parseFrontmatter: true, scope: { ASSETS } },
        components: useMDXComponents(),
    });

    return (
        <div className="wrapper">
            <div className="flex flex-row items-center justify-between">
                <h1 className="font-bold">{frontmatter.title}</h1>
                <Link href={frontmatter.github}>Github</Link>
            </div>
            {content}
        </div>
    );
}
