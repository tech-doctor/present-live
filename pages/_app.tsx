import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

// export default function MyApp(props: MyAppProps) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
//   return (
//     // <CacheProvider value={emotionCache}>
//     <div>
//       <Head>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     {/* </CacheProvider> */}
//     </div>
//   );
// }
