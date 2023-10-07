import React from "react";
import Head from "next/head";
import About from "../components/About";
import Skills from "../components/Skills";
import Start from "../components/Start";

export default function Page() {
    return (
        <>
            <Head>
                <title>Home - Vladimir Fadeev</title>
                <meta name="description" content="Blog by Vladimir Fadeev" />
                <meta name="author" content="Vladimir Fadeev" />
                <meta name="keywords" content="Blog, Portfolio, Home"></meta>
            </Head>
            <Start />
            <About />
            <Skills />
        </>
    );
}