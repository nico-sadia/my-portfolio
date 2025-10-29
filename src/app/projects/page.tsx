import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjectsMeta } from "@/lib/projects";

export default function Projects() {
    const projects = getAllProjectsMeta();
    return (
        <main>
            <section className="grid grid-cols-2 gap-4">
                {projects.map((project) => {
                    return <ProjectCard project={project} key={project.id} />;
                })}
            </section>
        </main>
    );
}
