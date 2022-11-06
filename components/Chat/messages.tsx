import  React from 'react';
import {useHMSStore, selectHMSMessages } from '@100mslive/react-sdk';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

function getTime(dateFormat:any):any {
  const hours = dateFormat.getHours() < 10 ? `0${dateFormat.getHours()}` : dateFormat.getHours();
  const minutes = dateFormat.getMinutes() < 10 ? `0${dateFormat.getMinutes()}` : dateFormat.getMinutes();;
  return  `${hours}:${minutes}`
 }

 interface receiptProps{
  read: boolean
  ignored:boolean
}

const Messages:React.FC = () => {
   const allMessages = useHMSStore(selectHMSMessages);
   
  const RecieptIcon:React.FC<receiptProps> = ({read, ignored}) => {
    return (
    <div className='text-xs'>
      {!ignored && !read? <CheckOutlinedIcon sx={{fontSize: '13px',
      color: 'gray'
      }}/> :
        <DoneAllOutlinedIcon  sx={{
        fontSize: '14px',
        color: `${read && '#4FB6EC'}`
      }}/>
      }
    </div>
    )
  }

  return(
    <>
      {allMessages.map(data => 
      <div
      key = {data.id}
      className={`w-fit ${data.senderName === "You"? "ml-auto": 'mr-auto'} my-2 mx-1`}>
        <div className='chat-box relative py-0.5 w-fit'> 
          <div 
            className={`${data.senderName === "You"? "bg-[#cad2de]": 'bg-white'} break-words max-w-[180px] xs:max-w-[230px] md:max-w-[250px] w-fit px-3 pr-5 py-2 text-xs text-gray-900 rounded-md relative`}>
            {data.message}

            {data.senderName === "You" && <span className='text-right text-xs  absolute bottom-0 right-0 p-1 z-10 '><RecieptIcon
            read = {data.read}
            ignored = {data.ignored}
            /></span>}
          </div>
          <div
            style={angleStyle(data?.senderName)}
            className= {`absolute ${data.senderName === "You"? "right-[-8px] bottom-[0.5px]": "left-[-9px] bottom-[2px]"}  `}
          >   
          </div>  
        </div>
        <div className={`${data.senderName === "You"?'text-right': 'text-left'} mt-[-2px] text-[9px] text-gray-500`}>
          <span>{data.senderName === "You"? '(You)': data.senderName}</span>
          <span> {getTime(data.time)}</span>
        </div>
      </div>
      )}
    </>   
  )
}


const angleStyle = (sender:string | undefined)  => {
  const style = {
  width: '0',
  height: '0', 
  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',
  borderBottom: `10px solid ${sender === "You"? "#cad2de" : "white" }`,
  borderRadius:'100px',
  transform: sender === "You"? 'rotate(-135deg)': 'rotate(0deg)',
  }
  return style
}


export default Messages;