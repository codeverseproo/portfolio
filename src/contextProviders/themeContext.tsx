/* eslint-disable react-refresh/only-export-components */
import React from "react"
import { createContext, useState } from "react"

type TthemeContext = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>> | null
}

export const themeContext = createContext<TthemeContext>({
    theme: "dark",
    setTheme: null
});

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const localTheme = localStorage.getItem("theme")
    const [currentTheme, setCurrentTheme] = useState(localTheme ? localTheme : "dark");

    localStorage.setItem("theme", currentTheme);

    return (
        <themeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>{children}</themeContext.Provider>
    )
}
