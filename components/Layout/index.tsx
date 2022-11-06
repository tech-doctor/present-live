import React from 'react';
import { selectIsConnectedToRoom, useHMSStore } from '@100mslive/react-sdk';
import Head from 'next/head';
import JoinScreen from '../Join';
import Header from './Header';
import Sidebar from './SIdebar';


interface Props {
   children:React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
   const isConnected = useHMSStore(selectIsConnectedToRoom)
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
      {!isConnected ? <JoinScreen/> : 
      <div className='flex'>
        <div className='hidden md:flex'>
          <Sidebar/>
        </div>
        <div className='w-full pr-4  pl-3 md:pl-6 lg:pl-7 xl:pl-10'>
          <Header/>
          {children}
        </div>
      </div>} 
      </main>
    </div>
  )
}

export default Layout;
