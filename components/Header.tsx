import Link from 'next/link';
import styles from '../styles/Header.module.sass';
import Menu from './Menu';

export default function Header() {

    return (
        <header className={styles.header}>
            <h1>
                <Link
                    scroll={false}
                    href={'/'}
                >
                    <span>
                        Vladimir Fadeev
                    </span>
                    <span>
                        VF
                    </span>
                </Link>
            </h1>
            <Menu />
        </header >
    );
}