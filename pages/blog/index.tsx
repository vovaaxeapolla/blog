import Head from 'next/head';
import Post from '../../components/Post';
import styles from './Blog.module.sass';
import { useEffect, useState } from 'react';

type Post = {
    id: string
    title: string
    text: string
}

export default function Blog() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/posts')
            const posts = await res.json() as Post[];
            setPosts(posts);
        })()
    }, [])

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
