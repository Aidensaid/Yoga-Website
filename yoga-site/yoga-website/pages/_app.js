import 'semantic-ui-css/semantic.min.css';
import Head from "next/head"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
    <>
     <Head>
        <link rel="shortcut icon" href="/yoga-pose.png" />
     </Head>
     <Component {...pageProps} />
    </>
    )
}