import Image from "next/image";
import Link from "../../components/ui/Link";
import { ProjectMetaWithSlug } from "../../types";

type ProjectCardProps = {
    project: ProjectMetaWithSlug;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div key={project.id} className="flex flex-col gap-2 py-4">
            <Image
                src={project.icon}
                alt="Project icon"
                width={50}
                height={50}
            />
            <h1 className="font-semibold text-md mb-1">{project.title}</h1>
            <div className="flex flex-col mt-auto">
                <Link href={`projects/${project.slug}`}>read more</Link>
                <Link href={project.github}>github</Link>
            </div>
        </div>
    );
}
