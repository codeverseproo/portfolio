import { personalDetail, socialLinks } from "../lib/appConst"
import Button from "./utils/Button"
import closeShot from "../assets/closeShot.jpg"

export default function Hero() {
    return (
        <section id="About-Me" className="flex min-h-screen justify-center gap-20 items-center px-16 max-md:py-16 md:flex-row flex-col">
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="font-karla font-bold text-4xl">{personalDetail.name}</h2>
                <h3 className="text-xl font-semibold">{personalDetail.role}</h3>
                <ul className="flex gap-2">

                    {
                        socialLinks.map((social) => {
                            return <li key={social.imgUrl}><a href={social.externalLink}><img src={social.imgUrl} alt={social.label} className="social-icon" /></a></li>
                        })
                    }

                </ul>
                <p className="max-w-sm text-center">{personalDetail.discription}</p>
                <Button>Resume</Button>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <img src={closeShot} className="rounded-full w-[70%]"></img>
                </div>
            </div>
        </section>
    )
}
