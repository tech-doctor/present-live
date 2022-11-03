import  React from 'react';
import { useHMSActions,
      useHMSStore, 
      selectHMSMessages,
      selectBroadcastMessages,
      selectMessagesByRole,
      selectMessagesByPeerID
     } from '@100mslive/react-sdk';


const Messages:React.FC = () => {
    const hmsActions = useHMSActions();
    //hmsActions.sendBroadcastMessage('Hello everyone')
    const allMessages = useHMSStore(selectHMSMessages); // get all messages
    const brodacastMessages = useHMSStore(selectBroadcastMessages); // get all broadcasted messages
    const groupMessagesByRole = useHMSStore(selectMessagesByRole('host')); // get conversation with the host role
    //const directMessages = useHMSStore(selectMessagesByPeerID(peer.id)); 

     console.log(allMessages)
     console.log(brodacastMessages)
     console.log(groupMessagesByRole)
    return(
        <div>
            {/* <div className=' chat-container relative bg-red-300 right-[0px] w-fit'> */}
                <div className='chat-box relative py-0.5 w-fit clear-right'>
                    <div 
                    className='bg-[#cad2de] break-words max-w-[100px] xs:max-w-[150px] sm:max-w-[180px] md:max-w-[220px] w-fit px-3 py-2 text-xs rounded-md'>
                        My chart wehwejwb ejjwhebwubebieiwweuwyewuybeuwebeiwekewiineuhwiehwijjj
                        <span className='text-right text-xs'>tick</span>
                    </div>
                    <div
                    style={angleStyle}
                    className= 'absolute right-[-8px] bottom-[0.5px]'
                    >   
                    </div>
                </div><br/>
                {/* <div className='flex flex-col'>Isaac</div> */}
            {/* </div> */}
        </div>   
    )
}


const angleStyle:any = {
    width: '0',
    height: '0', 
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #cad2de',
    transform: 'rotate(-135deg)',
}

export default Messages;