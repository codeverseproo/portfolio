
type TProjectCard = {
    projectImg: string,
    projectTitle: string
}

export default function ProjectCard({ projectImg, projectTitle }: TProjectCard) {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <img src={projectImg} className="bg-white rounded-lg w-[200px] h-[200px] border-2 border-pista-500 shadow-sm shadow-pista-200" alt="#" />
            <h3 className="font-semibold text-lg">{projectTitle}</h3>
        </div>
    )
}
