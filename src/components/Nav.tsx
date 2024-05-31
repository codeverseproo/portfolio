import { menu } from "../lib/appConst";

export default function Nav() {
    return (
        <nav className="px-16 py-5 bg-pista-500 flex justify-between flex-wrap gap-5 max-md:flex-col max-md:items-center">
            <div>
                <h1 className="font-karla font-bold text-lg">CodeversePro</h1>
            </div>
            <div>
                <ul className="flex gap-5 flex-wrap justify-center">
                    {
                        menu.map((item) => {
                            return <li key={item.label} className=""><a href={item.url} className="px-2 py-2">{item.label}</a></li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
