import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type {
    ProjectMeta,
    ProjectMetaWithContent,
    ProjectMetaWithSlug,
} from "../types";

const PROJECTS_DIR = path.join(process.cwd(), "/content/projects");

const extractProjectMatter = (slug: string) => {
    const filePath = path.join(PROJECTS_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath);
    return matter(fileContent);
};

export const getAllProjectsMeta = (): ProjectMetaWithSlug[] => {
    const files = fs.readdirSync(PROJECTS_DIR);

    return files.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const result = extractProjectMatter(slug);
        return { ...(result!.data as ProjectMeta), slug };
    });
};

export const getProjectBySlug = (
    slug: string
): ProjectMetaWithContent | null => {
    const result = extractProjectMatter(slug);
    return result
        ? { ...(result.data as ProjectMeta), content: result.content }
        : null;
};
