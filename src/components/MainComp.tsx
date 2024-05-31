import { useThemeContext } from "../lib/contextProvider";

export default function MainComp({ children }: { children: React.ReactNode }) {
    const ThemeContext = useThemeContext();

    return (
        <main className={ThemeContext.theme == "dark" ? "bg-dgreen-700 min-h-screen text-gray-50" : "bg-white  min-h-screen text-dgreen-700"} > {children}</main >
    )
}
