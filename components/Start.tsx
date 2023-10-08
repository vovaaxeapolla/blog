import Typing from "./Typing";
import styles from '../styles/Start.module.sass';

export default function Start() {
    return (
        <section className={styles.start}>
            <div className={styles['start__content']}>
                <h1>
                    <Typing text={["Hello, I'm Vladimir", "This is my blog", 'This is my portfolio']} delay={100} />
                    <span className={styles['start__blinker']} />
                </h1>
                <h3>I'm a software developer</h3>
            </div>
        </section>
    );
}