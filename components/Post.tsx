import styles from '../styles/Post.module.sass';

interface IPost {
    text: string
    title: string
}

export default function Post({ text, title }: IPost) {
    return (
        <div className={styles.post}>
            <h1 className={styles['post__title']}>{title}</h1>
            <p className={styles['post__text']}>{text}</p>
        </div>
    );
}
