import { QueryResultRow, sql } from "@vercel/postgres";
import { useEffect, useState } from 'react';
import Post from '../../components/Post';
import Head from 'next/head';

async function get() {
    const { rows } = await sql`SELECT * FROM posts`;
    return rows;
}

export default function Blog() {

    const [posts, setPosts] = useState<QueryResultRow[]>([])

    useEffect(() => {
        get().then(rows => setPosts(rows));
    })

    return (
        <div className='blog'>
            <Head>
                <title>Blog - Vladimir Fadeev</title>
                <meta name="description" content="Blog by Vladimir Fadeev" />
                <meta name="author" content="Vladimir Fadeev" />
                <meta name="keywords" content="Blog, Portfolio, Home"></meta>
            </Head>
            {posts.map(p => <Post title={p.title} text={p.text} />)}
        </div>
    )
}