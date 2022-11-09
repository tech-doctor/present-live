import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHMSNotifications } from '@100mslive/react-sdk';

interface Props{
    children:React.ReactNode;
    notify:any
}

const NotificationList:React.FC<Props> = ({children, notify}) => {
    const notification = useHMSNotifications();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    console.log(notify(notification));

    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{width: 'fit-content'}}
        >
          {children}
        </Button>
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
              'aria-labelledby': 'basic-button',
              }}
          >
              <div className='overflow-y-auto h-[200px] px-2'>
              <MenuItem onClick={handleClose}>{notify(notification)}</MenuItem>
              {/* <MenuItem onClick={handleClose}>Notification 2</MenuItem>
              <MenuItem onClick={handleClose}>Notification 3</MenuItem>
              <MenuItem onClick={handleClose}>Notifiaction 1</MenuItem>
              <MenuItem onClick={handleClose}>Notification 2</MenuItem>
              <MenuItem onClick={handleClose}>Notification 3</MenuItem>
              <MenuItem onClick={handleClose}>Notifiaction 1</MenuItem>
              <MenuItem onClick={handleClose}>Notification 2</MenuItem>
              <MenuItem onClick={handleClose}>Notification 3</MenuItem>
              <MenuItem onClick={handleClose}>Notifiaction 1</MenuItem>
              <MenuItem onClick={handleClose}>Notification 2</MenuItem>
              <MenuItem onClick={handleClose}>Notification 3</MenuItem> */}
              </div>
              
          </Menu>
      </div>
    );
}

export default NotificationList;