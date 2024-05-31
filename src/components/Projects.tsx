import { projects } from "../lib/appConst";
import ProjectCard from "./Projects/ProjectCard";

export default function Projects() {
    return (
        <section className="section" id="Projects">
            <h1 className="section-heading">Projects</h1>
            <div className="flex justify-center items-center flex-wrap gap-10 mt-16">
                {
                    projects.map((project) => {
                        return <ProjectCard key={project.projectTitle} projectImg={project.projectImg} projectTitle={project.projectTitle} />
                    })
                }
            </div>
        </section>
    )
}