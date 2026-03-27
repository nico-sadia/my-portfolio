import IconButton from "@/components/ui/IconButton";
import { ASSETS } from "@/lib/constants";
import { useMDXComponents } from "@/mdx-components";
import { Github } from "@/svg";
import { ProjectMeta } from "@/types";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

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

    const githubLinks = Array.isArray(frontmatter.github)
        ? frontmatter.github
        : [{ label: "Github", url: frontmatter.github }];

    return (
        <div className="w-3/4">
            <div className="not-prose flex flex-row items-center justify-between gap-6 flex-wrap bg-lime-200 dark:bg-lime-900 p-6 rounded-lg">
                <h1 className="font-bold text-lime-500 text-4xl">
                    {frontmatter.title}
                </h1>

                <span className="flex flex-row gap-4">
                    {githubLinks.map((link, i) => (
                        <span
                            key={i}
                            className="flex flex-col gap-1 justify-between items-center"
                        >
                            <p className="text-sm">{link.label}</p>
                            <IconButton icon={<Github />} href={link.url} />
                        </span>
                    ))}
                </span>
                <p className="italic text-lg">{frontmatter.description}</p>
            </div>
            {content}
        </div>
    );
}
