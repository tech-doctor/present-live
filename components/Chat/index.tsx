import React, {useState} from 'react';
//import { useHMSStore} from '@100mslive/react-sdk';
import Input from './input';
import Messages from './messages';
import Participants from './participants';

const Chat:React.FC = ({}) => {
    const [openMessage, setOpenMessage] = useState(true)
    
    const handleClick = (event:any) => {
        const {id} = event.target;
        if(id === 'messages'){
            setOpenMessage(true);
        }else{
            setOpenMessage(false);
        }
    }
    return (
       <div className='mt-4 lg:mt-0  lg:w-[40%] py-1 bg-[#f2f3f7] rounded-lg'>
         <div className="top flex items-center justify-between py-3 px-4">
            <div className='left text-secondary font-semibold text-[15px]'>
                Chat
            </div>
            <div className="right">
                <span 
                onClick={handleClick}
                id = "messages"
                className={`text-xs py-1  px-2.5 rounded-xl mx-1 cursor-pointer hover:bg-gray-200 ${openMessage ?'text-primary-800 bg-primary-400 font-bold hover:bg-primary-400' :'text-gray-500 font-semibold' }`}>Messages</span>
                <span 
                onClick={handleClick}
                id = "Participants"
                className={`text-xs cursor-pointer  py-1 px-2.5 rounded-xl hover:bg-gray-200 ${!openMessage ?'text-primary-800 bg-primary-400 font-bold hover:bg-primary-400' :'text-gray-500 font-semibold' }`}>Participants</span>
            </div>
         </div>
         <div className='messages bg-[#edf0f5] px-4 overflow-y-scroll h-40 max-h-40 lg:h-[70vh] lg:max-h-[70vh] py-5'>
            {openMessage ? <Messages/> : <Participants/> }  
         </div>
         {openMessage &&  <div className="input-form bg- [#edf0f5]">
            <Input/>
         </div>}
       </div>   
    )
}


export default Chat;
