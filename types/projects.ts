import { IconKey } from "@/lib/iconMap";

export type ProjectMeta = {
    id: string;
    title: string;
    github: string;
    icon: IconKey;
};

export type ProjectMetaWithSlug = ProjectMeta & {
    slug: string;
};

export type ProjectMetaWithContent = ProjectMeta & {
    content: string;
};
