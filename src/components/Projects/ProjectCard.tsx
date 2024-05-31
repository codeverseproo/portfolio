import { useThemeContext } from "../../lib/contextProvider"

type TProjectCard = {
    projectImg: string,
    projectTitle: string,
    gitURL: string,
    projectDescription: string
}

export default function ProjectCard({ projectImg, projectTitle, gitURL, projectDescription }: TProjectCard) {
    const themeContext = useThemeContext();
    return (
        <div className="">
            <a href={gitURL} target="_blank" className="flex flex-col justify-center items-center gap-3 lg:hover:scale-105 transition-all duration-75">
                <img src={projectImg} className={`bg-white rounded-lg w-[200px] h-[200px]  shadow-sm  ${themeContext.theme == 'dark' ? "border-pista-500 shadow-pista-200" : "border-dgreen-700 shadow-dgreen-300"}`} alt="#" />
                <h3 className="font-semibold text-lg">{projectTitle}</h3>
                <p>{projectDescription}</p>
            </a>
        </div>
    )
}
