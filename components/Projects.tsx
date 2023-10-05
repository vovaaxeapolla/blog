import Title from "./Title";
import styles from '../styles/Projects.module.sass';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section className={styles.projects}>
            <Title text='Portfolio &' />
            <Title text='Previous Projects' />
            <div className={styles.list}>
                <div className={styles.project}>
                    <motion.div
                        className={styles.left}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: .2 }}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                            hidden: { x: '-100%', opacity: 0 }
                        }}
                    >
                        <h2>Entertaiment app</h2>
                        <h1>Console</h1>
                        <p className={styles.description}>
                            Online store for selling apparel & foot wear.
                        </p>
                        <p className={styles.techs}>
                            <strong>Built with:</strong> React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).
                        </p>
                        <strong>
                            <Link href="/" >Visit the code {'>'}</Link>
                        </strong>
                        <strong>
                            <Link href="/" style={{ color: 'var(--accent-color' }}>Visit the app {'>'}</Link>
                        </strong>
                    </motion.div>
                    <motion.div
                        className={styles.right}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0 }}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                            hidden: { x: '100%', opacity: 0 }
                        }}
                    >
                        <Image src='/images/123.jpg' alt='' width={1000} height={1000} />
                    </motion.div>
                </div>
                <div className={styles.project}>
                    <motion.div
                        className={styles.left}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: .2 }}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                            hidden: { x: '-100%', opacity: 0 }
                        }}
                    >
                        <h2>Entertaiment app</h2>
                        <h1>Console</h1>
                        <p className={styles.description}>
                            Online store for selling apparel & foot wear.
                        </p>
                        <p className={styles.techs}>
                            <strong>Built with:</strong> React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).
                        </p>
                        <strong>
                            <Link href="/" >Visit the code {'>'}</Link>
                        </strong>
                        <strong>
                            <Link href="/" style={{ color: 'var(--accent-color' }}>Visit the app {'>'}</Link>
                        </strong>
                    </motion.div>
                    <motion.div
                        className={styles.right}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0 }}
                        variants={{
                            visible: { x: 0, opacity: 1 },
                            hidden: { x: '100%', opacity: 0 }
                        }}
                    >
                        <Image src='/images/123.jpg' alt='' width={1000} height={1000} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}