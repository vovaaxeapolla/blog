import Image from 'next/image';
import styles from '../styles/Post.module.sass';

export default function Post() {
    return (
        <div className={styles.post}>
            <h1 className={styles['post__title']}>Console Update. Bug fixing</h1>
            <p className={styles['post__text']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa consequatur itaque incidunt doloribus nam doloremque alias quam facilis unde, eius labore repellat earum magni id dignissimos, minus nihil, necessitatibus voluptates?</p>
        </div>
    );
}
