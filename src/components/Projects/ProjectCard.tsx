import { useThemeContext } from "../../lib/contextProvider"

type TProjectCard = {
    projectImg: string,
    projectTitle: string
}

export default function ProjectCard({ projectImg, projectTitle }: TProjectCard) {
    const themeContext = useThemeContext();
    return (
        <div className="flex flex-col justify-center items-center gap-5 lg:hover:scale-105 transition-all duration-75">
            <img src={projectImg} className={`bg-white rounded-lg w-[200px] h-[200px]  shadow-sm  ${themeContext.theme == 'dark' ? "border-pista-500 shadow-pista-200" : "border-dgreen-700 shadow-dgreen-300"}`} alt="#" />
            <h3 className="font-semibold text-lg">{projectTitle}</h3>
        </div>
    )
}
