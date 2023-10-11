import type { AppProps } from "next/app";
import { useEffect, createContext, useState } from "react";
import Header from "../components/Header";
import '../styles/global.sass';
import { AnimatePresence, motion } from "framer-motion";
import TilesTransition from "../components/TilesTransition";
import Background from "../components/Background";
import { useNextCssRemovalPrevention } from "../hooks/useNextCssRemovalPrevention";
import useVhFix from "../hooks/useVh";
import ProgressBar from "../components/ProgressBar";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export default function App({ Component, pageProps, router }: AppProps) {

    // useNextCssRemovalPrevention();

    useEffect(() => {
        const styles = document.querySelectorAll('head > [data-n-href]');
        [...styles].forEach(s => s.removeAttribute('media'));
    })

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
            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    key={router.asPath}
                    transition={{ duration: .4 }}
                    className="wrapper"
                >
                    <div className="wrapper">
                        <Component {...pageProps} key={router.pathname} />
                    </div>

                    <TilesTransition TilesNumber={20} />
                </motion.div>
            </AnimatePresence>
            <Background />
        </ThemeContext.Provider>
    )
}