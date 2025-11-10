export type ProjectMeta = {
    id: string;
    title: string;
    github: string;
    icon: string;
};

export type ProjectMetaWithSlug = ProjectMeta & {
    slug: string;
};

export type ProjectMetaWithContent = ProjectMeta & {
    content: string;
};
