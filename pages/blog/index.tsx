import Head from 'next/head';
import Post from '../../components/Post';
import styles from './Blog.module.sass';
import mysql, { RowDataPacket } from 'mysql2/promise';
import pool from '../../utils/db';

interface Post extends RowDataPacket {
    id: string
    title: string
    text: string
}

export const getServerSideProps = (async () => {
    try {
        const posts = (await pool.query<Post[]>('SELECT * FROM posts'))[0];
        return { props: { posts } }
    } catch (error) {
        console.log('Упала база данных');
    }
})

export default function Blog({ posts }: { posts: [] }) {

    return (
        <div className={styles.blog}>
            <Head>
                <title>Blog - Vladimir Fadeev</title>
                <meta name="description" content="Blog by Vladimir Fadeev" />
                <meta name="author" content="Vladimir Fadeev" />
                <meta name="keywords" content="Blog, Portfolio, Home"></meta>
            </Head>
            {posts.map((p: Post) => <Post key={p.id} title={p.title} text={p.text} />)}
        </div>
    )
}
