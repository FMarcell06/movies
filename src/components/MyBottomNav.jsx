import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdMovie } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router';


export const MyBottomNav =()=> {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()


  const handleChange=(event,newValue)=>{
    setValue(newValue)
    console.log(newValue);
    if(newValue==0) navigate("/")
    if(newValue==1) navigate("tvseries")
    if(newValue==2) navigate("search")
  }

  return (
    <Box sx={{ maxWidth:"650px", position:"fixed", bottom:0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={ {border:"#2563eb 5px solid", borderRadius:"5px"}}
      >
        <BottomNavigationAction label="Movies" icon={<MdMovie />} />
        <BottomNavigationAction label="TV Series" icon={<IoTv />} />
        <BottomNavigationAction label="Search" icon={<IoSearch />} />
      </BottomNavigation>
    </Box>
  );
}