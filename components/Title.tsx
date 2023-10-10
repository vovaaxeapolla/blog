import styles from '../styles/Title.module.sass';

export default function Title({ text }) {
    return (
        <h1 className={styles.title}>
            <div className={styles['title__text']}>{
                text.split('').map((l: string, i: number) => <span key={i} className={l === ' ' ? styles.space : ''}>{l}</span>)
            }</div>
            <div className={styles['title__shadow']}>{text}</div>
        </h1>
    );
}