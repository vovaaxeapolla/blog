import Link from 'next/link';
import styles from '../styles/Header.module.sass';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../pages/_app';
import { useContext } from 'react';
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

export default function Header() {

    const path = usePathname();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={styles.header}>
            <h1>
                <Link
                    scroll={false}
                    href={'/'}
                >
                    Vladimir Fadeev
                </Link>
            </h1>
            <nav>
                {links.map(l =>
                    <Link
                        scroll={false}
                        key={l.url}
                        href={l.url}
                        className={path === l.url ? styles.link + ' ' + styles.active : styles.link}>
                        {l.title}
                    </Link>)}
            </nav>
            <div>
                <button onClick={toggleTheme}>
                    {theme}
                </button>
            </div>
        </header>
    );
}