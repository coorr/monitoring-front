import '../styles/global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-pro-sidebar/dist/css/styles.css';
import Head from 'next/head'
import SSRProvider from 'react-bootstrap/SSRProvider';
import wrapper from '../store/configureStore';



function App({ Component, pageProps }) {

    return (
      <SSRProvider>
        <Head>
          <meta charSet='utf-8' />
          <title>coor</title>
        </Head>
        
          <Component {...pageProps} />
      </SSRProvider>
    )
  }

export default wrapper.withRedux(App);
// export default App;