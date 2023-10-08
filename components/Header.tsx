import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '../pages/_app';
import { useContext } from 'react';
import classNames from 'classnames';
import styles from '../styles/Header.module.sass';

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
                        className={classNames(styles['header__link'],
                            { [styles['header__link-active']]: l.url === path })}>
                        {l.title}
                    </Link>)}
            </nav>
            <div className={styles['header__theme']}>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </button>
            </div>
            <div className={styles['header__auth']}>
                <button>
                    Sign up
                </button>
                <button>
                    Sign in
                </button>
            </div>
        </header >
    );
}