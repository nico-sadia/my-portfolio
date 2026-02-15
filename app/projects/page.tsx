import { ICON_MAP } from "@/lib/iconMap";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import Link from "../../components/ui/Link";
import { ProjectMeta } from "../../types";

export default async function Projects() {
    const projects = await getProjectsData();
    console.log("projects", projects);
    return (
        <main>
            <ul className="grid gap-1">
                {projects.map((p) => {
                    const Icon = ICON_MAP[p.icon];
                    return (
                        <li
                            key={p.id}
                            className="flex flex-row items-center gap-2"
                        >
                            {Icon && <Icon className="size-6" />}
                            <Link
                                href={`projects/${p.fileName.replace(".mdx", "")}`}
                            >
                                {p.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

const getProjectsData = async () => {
    const fileNames = await fs.readdir(
        path.join(process.cwd(), "content/projects"),
        "utf-8",
    );
    const projectData = await Promise.all(
        fileNames.map(async (fileName) => {
            const source = await fs.readFile(
                path.join(process.cwd(), "content/projects", fileName),
                "utf-8",
            );

            const { frontmatter } = await compileMDX<ProjectMeta>({
                source,
                options: { parseFrontmatter: true },
            });
            return { fileName, ...frontmatter };
        }),
    );
    return projectData;
};
