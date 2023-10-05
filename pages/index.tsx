import React from "react";
import styles from './page.module.sass';
import Head from "next/head";
import Typing from "../components/Typing";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Page() {
    return (
        <div className={styles.portfolio}>
            <Head>
                <title>Home - Vladimir Fadeev</title>
                <meta name="description" content="Blog by Vladimir Fadeev" />
                <meta name="author" content="Vladimir Fadeev" />
                <meta name="keywords" content="Blog, Portfolio, Home"></meta>
            </Head>
            <div className={styles['portfolio__wrapper']}>
                <section className={styles.home}>
                    <div className={styles.content}>
                        <h1>
                            <Typing text={["Hello, I'm Vladimir", "This is my blog", 'This is my portfolio']} delay={100} />
                            <span className={styles.blinker} />
                        </h1>
                        <h3>I'm a software developer</h3>
                    </div>
                </section>
                <About />
                <Skills />
            </div>
        </div>
    );
}