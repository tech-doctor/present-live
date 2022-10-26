import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from './Header';

interface Props {
   children:React.ReactNode;
}

const Layout: NextPage<Props> = ({children}) => {
   
  return (
    <div>
      <Head>
        <title>Present Live</title>
        <meta property="og:title" content="Present Live | Oluka Isaac" key="title" />
        <meta name="description" content="Platform where recruiters and recruiting candidates can easily have meetings and make presentations"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <meta property="og:locale" content="en_GB"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Oresent Live"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <>
         <Header/>
        </>
        {children}
      </main>
    </div>
  )
}

export default Layout;
