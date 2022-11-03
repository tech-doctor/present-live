import type { NextPage } from 'next';
import React from 'react';
import { useHMSStore, selectPeers, useVideo } from '@100mslive/react-sdk';
import { borderRadius, width } from '@mui/system';

interface Props {
    peer: any
}

const Video:React.FC<Props> = ({peer}) => {
    const  {videoRef} =  useVideo({
      trackId: peer.videoTrack
    });
    return (
        <video
        className=' rounded-lg h-fit bg-gray-200'
        style={peer.isLocal? localStyle: remoteStyle}
        ref = {videoRef}
        autoPlay
        playsInline
        muted
        /> 
    )
}

const remoteStyle:any = {
 position: 'absolute',
 top: 15,
 zIndex: 5,
 right: 15,
 width: '25%',
 height: 'fit-content',
 border: '2px solid white'
}

const localStyle:any = {
   position: 'relative',
   //width: '100%',
   borderRadius: '10px',
   //height: '100vh'
}

export default Video;
