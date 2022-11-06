import React,{useState} from 'react'
import {useHMSActions} from '@100mslive/react-sdk';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Input:React.FC = () => {
    const hmsActions = useHMSActions();
    const [chatInput, setChatInput] = useState('');

    
    const handleInputChange = (event:any) => {
       setChatInput(event.target.value);
    }

    const sendMessage = (event:any) => {
       event.preventDefault();
       if(chatInput !== ''){
        hmsActions.sendBroadcastMessage(chatInput)
       }
       setChatInput('');
       //console.log(chatInput)
    }

    return (
       <form
       onSubmit={sendMessage}
        className='flex items-center bg-white mx-3 py-1  px-1 rounded-md my-2'>
        <input
        className='w-full outline-none text-sm placeholder:text-xs placeholder:font-medium py-1 pl-3 pr-2'
        type='text'
        placeholder='Write message...'
        onChange={handleInputChange}
        value = {chatInput}
        />
        <button type='submit' className='bg-[#15ab88] pb-1 px-2 pl-3 text-center w-fit rounded-md cursor-pointer hover:scale-105'>
            <SendRoundedIcon
            sx={{transform:'rotate(-35deg)', color: 'white',
            fontSize: '16px', textAlign:'center'
        }}/>
        </button>
       </form>   
    )
}


export default Input;
