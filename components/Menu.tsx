import React, { useContext, useState } from "react";
import styles from '../styles/Menu.module.sass';
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "../pages/_app";
import AuthForm from "./Popups/AuthForm";
import useBodyHidden from "../hooks/useBodyHidden";

const links = [
    {
        url: '/',
        title: 'Home'
    },
    {
        url: '/blog',
        title: 'Blog'
    },
    {
        url: '/portfolio',
        title: 'Portfolio'
    }
]

export default function Menu() {

    const path = usePathname();
    const [opened, setOpened] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [signin, setSignin] = useState(false);

    useBodyHidden(opened);

    return (
        <div className={classNames(styles.menu, { [styles['menu-opened']]: opened })}>
            <button className={styles['menu__button']} onClick={() => setOpened(p => !p)}>
                <div></div>
            </button>
            <div className={styles['menu__overlay']} onClick={() => setOpened(false)} />
            <div className={styles['menu__container']}>
                <span>
                    Navigation
                </span>
                <nav>
                    {links.map(l =>
                        <Link
                            scroll={false}
                            key={l.url}
                            href={l.url}
                            onClick={() => setOpened(false)}
                            className={classNames(styles['menu__link'],
                                { [styles['menu__link-active']]: l.url === path })}>
                            {l.title}
                        </Link>)}
                </nav>
                <span>
                    Settings
                </span>
                <button
                    onClick={toggleTheme}
                    className={styles['menu__link']}>
                    Theme
                    <span>{theme === 'light' ? '☀️' : '🌙'}</span>
                </button>
                <span>
                    Account
                </span>
                <button
                    onClick={() => setSignin(true)}
                    className={styles['menu__link']}>
                    Account
                </button>
                <AnimatePresence
                    initial={true}
                    mode="wait"
                >
                    {signin && <AuthForm close={() => setSignin(false)} />}
                </AnimatePresence>
            </div>
        </div >
    );
}