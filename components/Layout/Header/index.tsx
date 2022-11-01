import Image from 'next/image';
import React,{useState} from 'react';
import { Badge } from '@mui/material';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from "@mui/icons-material/Circle";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header: React.FC = () => {
  const [openSide, setOpenSide] = useState(false);
   
  const openSideFunc = () => {
    setOpenSide(true)
  }

  const closeSideFunc = () => {
    setOpenSide(!openSide)
  }

  const style = {
    width: openSide? '70%' : '0px',
    transition: "width 0.7s"
  }

  return (      
    <div className="nav flex justify-between items-center border-b-2 border-[#ededed] py-2 md:py-[0.8rem] lg:py-4">
      <div className="left flex justify-between items-center">
        <div 
        onClick={openSideFunc}
        className='md:hidden cursor-pointer'>
          <MenuOutlinedIcon style={{fontSize: '28px'}}/>
        </div>
        <h4 className=' hidden md:block text-secondary font-bold  text-lg md:text-xl lg:text-2xl leading-0'>
          Job  interview with Candidate(Isaac)
        </h4>
        <div className='hidden md:flex bg-[#fdefe5] py-0.5 px-3 rounded-xl items-center mx-5 text-center'>
          <CircleIcon
            style={{fontSize: '6px', color:'#e75655'}}
          />
          <small className='text-tertiary font-bold text-xs ml-1'>Recruiter</small>
        </div>
      </div>
      <div className="right flex justify-between items-center">
        <div className="notification mx-7 cursor-pointer">
          <Badge 
          badgeContent = ""
          sx={{padding:' 0px 0px 0px 30px'}}
          color = "success"
          overlap = "circular"
          variant="dot">
            <div className="div">
              <NotificationsNoneSharpIcon
              style = {{color: "#babfcb"}}
              />
            </div>
          </Badge>
          </div>
          <div className="profile flex justify-between items-center">
            <div className="img w-[25px] h-[25px] md:w-[30px] md:h-[30px]">
              <Image 
              className='rounded-full'
              src = "https://avatars.githubusercontent.com/u/55724699?v=4"
              width = {30}
              height = {30}/>
            </div>
            <div className="name ml-3 mr-2 md:ml-2 md:mr-1">
              <p className='text-secondary font-bold text-md'>Bill</p>
            </div>
            <div className="expand">
              <ExpandMoreIcon
              style={{color: '#d1d2d8'}}
            />
          </div>
        </div>
      </div>
      <div 
      style={style}
      className=" mobile absolute z-10 bg-secondary text-white left-0 top-0 w-2/3 h-full">
        <div className={!openSide? 'hidden': 'block'}>
          <div 
          onClick={closeSideFunc}
          className='text-right mt-2 py-1 mx-3 cursor-pointer'>
            <CloseOutlinedIcon/>
          </div>
          <div className="content px-4 font-semibold">
            Job interview with Candidate(Isaac)
            <div className='flex bg-[#fdefe5] py-0.5 px-3 rounded-xl items-center mt-5 w-fit'>
              <CircleIcon
                style={{fontSize: '6px', color:'#e75655'}}
              />
          <small className='text-tertiary font-bold text-xs ml-1'>Recruiter</small>
        </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Header
