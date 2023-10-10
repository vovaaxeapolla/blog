import Head from 'next/head';
import Post from '../../components/Post';
import styles from './Blog.module.sass';
import mysql from 'mysql2';
import { promisify } from 'util';

type Post = {
    id: string
    title: string
    text: string
}

export const getServerSideProps = (async () => {
    try {
        const connection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_PASSWORD
        });
        const query = promisify(connection.query).bind(connection);
        const posts = await query('SELECT * FROM posts');
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
