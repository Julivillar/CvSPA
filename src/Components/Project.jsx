import { Aside } from "./Aside"
import { ProjectCard } from "./ProjectCard"
export const Project = () => {
    return (
        <>
            <Aside />
            <main className="mainProjectsContentContainer mainContentContainer">
                <section className="sectionProjectsContainer">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </section>

            </main>

        </>
    )
}