import { projects } from "../lib/appConst";
import ProjectCard from "./Projects/ProjectCard";

export default function Projects() {
    return (
        <section className="section" id="Projects">
            <h1 className="section-heading">Projects</h1>
            <div className="flex justify-center items-start flex-wrap gap-10 mt-16">
                {
                    projects.map((project) => {
                        return <ProjectCard key={project.projectTitle} gitURL={project.gitUrl} projectImg={project.projectImg} projectTitle={project.projectTitle} projectDescription={project.projectDescription} />
                    })
                }
            </div>
        </section>
    )
}
