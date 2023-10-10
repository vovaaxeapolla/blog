import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head >
                <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <div id='popups' />
                <NextScript />
            </body>
        </Html>
    );
}