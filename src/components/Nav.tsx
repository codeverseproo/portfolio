import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menu } from "../lib/appConst";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../lib/contextProvider";

export default function Nav() {

    const themeContext = useThemeContext();

    function handleThemeChange() {
        themeContext.setTheme!(themeContext.theme == "dark" ? "light" : "dark")
    }

    return (
        <nav className={`px-16 py-5 bg-pista-500 flex justify-between flex-wrap gap-5 max-md:flex-col max-md:items-center text-gray-50`}>
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
                    <li onClick={handleThemeChange} className="fixed top-5 right-5 text-2xl"><FontAwesomeIcon icon={faSun} className={themeContext.theme == 'dark' ? "text-white hover:scale-125 hover:rotate-90 transition-all duration-150" : "text-dgreen-700 hover:scale-125 hover:rotate-90 transition-all duration-150"} /></li>
                </ul>
            </div>
        </nav >
    )
}

