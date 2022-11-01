import React from 'react';
import { Badge } from '@mui/material';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';


const Sidebar: React.FC = () => {
   
  return (
    <div className='bg-secondary text-white w-fit h-[100vh] flex flex-col justify-between py-2'>
      <div className="top border-b-2 border-[#3a4369] px-2 lg:px-3">
        <h1 className=' text-[32px] lg:text-[40px] text-center font-bold'>
          J
        </h1>
      </div>
      <div className="center text-center px-2 lg:px-3">
      <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit my-10'>
          <TimelineOutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>

        <div className='m-auto text-white hover:text-white cursor-pointer w-fit h-fit my-10 bg-primary-600 px-2 lg:px-3 py-2 rounded-md'>
          <VideocamIcon
          style={{fontSize:'28px'}}
          />
        </div>

        <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit my-10 '>
          <InsertChartOutlinedOutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>

        <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit mb-10'>
          <Groups2OutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>

        <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit mb-10'>
          <EventNoteOutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>

        <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit my-10'>
          <DescriptionOutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>

        <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit my-10'>
          <CalendarMonthOutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>
      
        <div className='m-auto text-[#5a6484] hover:text-grey cursor-pointer w-fit h-fit my-10'>
          <LockOutlinedIcon
          style={{fontSize:'28px'}}
          />
        </div>
      </div>
      <div className="bottom  px-2 lg:px-3">
        bottom
      </div>
    </div>
  )
}

export default Sidebar;
