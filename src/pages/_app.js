import '../styles/global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-pro-sidebar/dist/css/styles.css';
import Head from 'next/head'
import SSRProvider from 'react-bootstrap/SSRProvider';




export default function App({ Component, pageProps }) {

    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <title>coor</title>
        </Head>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </>
    )
  }