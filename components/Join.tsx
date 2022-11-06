import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CircularProgress } from "@mui/material";
import { display } from "@mui/system";


const endPoint = 'https://prod-in2.100ms.live/hmsapi/Present.app.100ms.live/'

const getToken = async (user_id:string, role:string) => {
  const response = await fetch(`${endPoint}api/token`,{
    method: "POST",
    body: JSON.stringify({
      user_id,
      role,
      type: 'app',
      room_id: "635f87d14208780bf667249f"
    })
  });
  const {token} = await response.json();
  return token;
};

console.log(process.env)


const  JoinScreen = () => {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "", role: "" });
  const [isJoining, setIsJoining] = useState(false)


  const handleInputChange = (e:any) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(inputValues)
    setIsJoining(true)
    const token = await getToken(inputValues.name, inputValues.role);
    await hmsActions.join({
      userName: inputValues.name,
      authToken: token
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <form 
       className="py-7 px-6 w-[95%] md:w-4/5 lg:w-1/2 xl:w-1/3 shadow-none  md:shadow-md"
      onSubmit={handleSubmit}>
        <article className="heading text-center">
          <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl xl:text-3xl text-secondary">Welcome to Present-live</h2>
          <p className="text-md my-0.5 text-gray-600">Enter your details to join the room</p>
        </article>
        <div className="input-container">
          <input
            required
            className="outline-none text-gray-600 border hover:boder-[red] border-[#c4c4c4] w-[100%] mx-auto mt-4 px-3 py-4 rounded-[4px] "
            value={inputValues.name}
            onChange={handleInputChange}
            id="name"
            type="text"
            name="name"
            placeholder="Enter Your  Name..."
            autoComplete="off"
          />
        </div>
        <div className="input-container w-full my-4 outline-none">
          <FormControl sx={{minWidth: '100%', outline:'none'}}>
            <Select
              sx = {{padding: '0px'}}
              value={inputValues.role}
              onChange={handleInputChange}
              name = "role"
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className = 'border-[#c4c4c4]'
              required>
              <MenuItem value="">
                <p className="text-grey">Select Role...</p>
              </MenuItem>
              <MenuItem value={'recruiter'}>Recruiter</MenuItem>
              <MenuItem value={'candidate'}>Candidate</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="text-right ">
          
          <button className="bg-secondary text-white px-5 py-2 rounded-[4px] cursor-pointer hover:scale-105">
            {isJoining? <CircularProgress 
            size= {18}
            sx= {{color:'white', textAlign: 'center', display: 'flex'}}/>:
              'Join'
            }
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinScreen;

