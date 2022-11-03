import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { useHMSStore, selectPeers, useVideo } from '@100mslive/react-sdk';
import Video from '../components/Video';
import Chat from '../components/Chat';
//import PreviewScreen from '../components/Preview';


const Home: NextPage = () => {
  const peers = useHMSStore(selectPeers);

  //console.log(peers)
  return (
    <Layout>
      Joined
      <div className='flex justify-around flex-wrap lg:flex-nowrap w-full'>
        <div className=" relative">
          {peers.map((peer, i) => 
            <Video
            key={peer.id}
            peer = {peer}
            />
          )}
        </div>
        <div className="chat w-full lg:pl-5">
          <Chat/>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
