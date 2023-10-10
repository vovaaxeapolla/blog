import Head from 'next/head';
import Post from '../../components/Post';
import styles from './Blog.module.sass';

type Post = {
    id: string
    title: string
    text: string
}

export const getServerSideProps = (async () => {
    const res = await fetch(process.env.API_HOST + '/posts')
    const posts = await res.json() as Post[];
    return { props: { posts } }
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
