import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
   
  return (
    <div>
      <Head>
        <title>Present Live</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className=' text-3xl font-bold underline'>
          Welcome
        </h1>
        <p>Present Live</p>
      </main>
    </div>
  )
}

export default Home
