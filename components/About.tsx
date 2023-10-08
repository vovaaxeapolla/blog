import FadeInWhenVisible from './FadeInVisible';
import Title from './Title';
import styles from '../styles/About.module.sass'

export default function About() {

    return (
        <section className={styles.about}>
            <FadeInWhenVisible >
                <Title text='About me' />
            </FadeInWhenVisible>
            <div className={styles['about__container']}>
                <FadeInWhenVisible className={styles['about__left']} delay={.2}>
                    <h1>Hi, I`m Vladimir Fadeev <br />Web developer</h1>
                    <p>Front End Developer / JavaScript Fan / Fullstack enjoyer</p>
                </FadeInWhenVisible>
                <FadeInWhenVisible className={styles['about__right']} delay={.4}>
                    <p>Professionally connected with the web development industry.</p>
                    <p>Problem solver, well-organised person, loyal employee with high attention to detail. <br />
                        Fan of Boxing, outdoor activities, video games, and coding of course.</p>
                    <p>Interested in the entire frontend spectrum and working on ambitious projects with interesting people.</p>
                </FadeInWhenVisible>
            </div>
        </section >
    )
}