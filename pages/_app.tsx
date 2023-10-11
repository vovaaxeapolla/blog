import type { AppProps } from "next/app";
import { useEffect, createContext, useState } from "react";
import Header from "../components/Header";
import '../styles/global.sass';
import Background from "../components/Background";
import useVhFix from "../hooks/useVh";
import ProgressBar from "../components/ProgressBar";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export default function App({ Component, pageProps, router }: AppProps) {

    useVhFix();

    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        document.documentElement.setAttribute('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Header />
            <ProgressBar />
            <div className="wrapper">
                <Component {...pageProps} key={router.pathname} />
            </div>
            <Background />
        </ThemeContext.Provider>
    )
}