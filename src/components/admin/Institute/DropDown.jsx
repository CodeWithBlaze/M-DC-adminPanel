import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as api from "../../../axios/axiosReq";


const DropDown = ({val}) => {
    const [status,setStatus]=useState(val.verified)
    const verifyTutor=async(event,val)=>{
        let res= await api.updateTutorStatus({teacher_id:val.id,updated_status:event.target.value})
        setStatus(event.target.value);
        if (res.data==="Updated Successfully") {
          alert(`Updated ${val.full_name}`);
        } else {
          alert("Something went wrong");
        }
    }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">verified</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={status}
        label="verified"
        onChange={(e)=>{verifyTutor(e,val)}}
      >
        <MenuItem value={true}>True</MenuItem>
        <MenuItem value={false}>False</MenuItem>
      </Select>
    </FormControl>
  )
}

export default DropDown