
import 'semantic-ui-css/semantic.min.css';
import Head from "next/head"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: red;
}
`

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
    <>
    <GlobalStyle />
     <Head>
        <link rel="shortcut icon" href="/yoga-pose.png" />
     </Head>
     <Component {...pageProps} />
    </>
    )
}