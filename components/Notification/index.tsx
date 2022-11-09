import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHMSNotifications } from '@100mslive/react-sdk';
import NotificationList from './notificationList';

interface Props{
    children:React.ReactNode;
}

 const Notification:React.FC<Props> = ({children}) => {
 const notification = useHMSNotifications();
  
  console.log(notification);

  const notify = (notification:any) => {
    switch (notification?.type) {
        case "PEER_JOINED":
            return `${notification.data.name} joined`;
        case "PEER_LEFT":
            return `${notification.data.name} left`;
        case "NEW_MESSAGE":
            return `${notification.data.message} received from ${notification.data.senderName}`;
        case "ERROR":
            console.log('[Error]', notification.data);
            console.log('[Error Code]', notification.data.code);
            break;
        case "RECONNECTING":
            return `[Reconnecting], ${notification.data}`;   
        case "RECONNECTED":
            console.log('[Reconnected]');
            break;
        case "NAME_UPDATED":
            return`new peer=, ${notification.data}`;
        case "TRACK_DEGRADED":
            return`track - ${notification.data} degraded due to poor network`;
        case "TRACK_RESTORED":
            return `track - ${notification.data} recovered`;
        case "ROOM_ENDED":
            return `room ended, reason - ${notification.data.reason}`;
        case "REMOVED_FROM_ROOM":
            return`removed from room, reason - ${notification.data.reason}`;
        default:
            break;
    }
  }
  
  useEffect(():any => {
    let mounted = true;
   // if(mounted) {
        if (!notification) {
            return;
        }
     
       notify(notification)
        console.log('notification type', notification.type);
        console.log('data', notification.data);
    
    // return () => {
    //   mounted = false;
    // }
  }, [notification])


  return(
    <NotificationList
     notify = {notify}
     children = {children}
    />
  )
}


export default Notification;