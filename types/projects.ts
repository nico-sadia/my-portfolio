import { IconKey } from "@/lib/iconMap";

type GithubLink = {
    label: string;
    url: string;
};

export type ProjectMeta = {
    id: string;
    title: string;
    github: string | GithubLink[];
    icon: IconKey;
    description: string;
};

export type ProjectMetaWithSlug = ProjectMeta & {
    slug: string;
};

export type ProjectMetaWithContent = ProjectMeta & {
    content: string;
};
