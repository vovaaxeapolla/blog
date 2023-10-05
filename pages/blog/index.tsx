
import Post from '../../components/Post';
import Head from 'next/head';

export default function Blog() {
    return (
        <div className='blog'>
            <Head>
                <title>Blog - Vladimir Fadeev</title>
                <meta name="description" content="Blog by Vladimir Fadeev" />
                <meta name="author" content="Vladimir Fadeev" />
                <meta name="keywords" content="Blog, Portfolio, Home"></meta>
            </Head>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )
}