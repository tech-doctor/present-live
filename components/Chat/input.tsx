import type { NextPage } from 'next';
import React from 'react'
import { useHMSStore, selectPeers, useVideo } from '@100mslive/react-sdk';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
//import PreviewScreen from '../components/Preview';

const Input:React.FC = () => {
    return (
       <form className='flex items-center bg-white mx-3 py-1  px-1 rounded-md my-2'>
        <input
        className='w-full outline-none text-sm placeholder:text-xs placeholder:font-medium py-1 pl-3'
        type='text'
        placeholder='Write message...'
        />
        <button className='bg-[#15ab88] pb-1 px-2 pl-3 text-center w-fit rounded-md cursor-pointer'>
            <SendRoundedIcon
            sx={{transform:'rotate(-35deg)', color: 'white',
            fontSize: '16px', textAlign:'center'
        }}/>
        </button>
       </form>   
    )
}


export default Input;
