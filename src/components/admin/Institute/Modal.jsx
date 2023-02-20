import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({val}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h1">
            {val.full_name} Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name: {val.full_name} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            E-mail: {val.email} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            DOB: {val.dob} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            City: {val.city},State: {val.state} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Years of Experience: {val.yoe} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Qualification: {val.qualification} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Rating: {val.rating}, Total Doubt Solved: {val.total_doubt_solved}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Primary Language: {val.primary_language}, Secondary Language: {val.secondary_language}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Primary Apparatus: {val.primary_apparatus}, Secondary Apparatus: {val.secondary_apparatus}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {val.description}
          </Typography>
          <Typography id="modal-modal-description" variant="h4" sx={{ mt: 2 }}>
            Verified: {val.verified?"Verified":"Not Verified"}
          </Typography>
          <img src={val.profile_image} alt="pfp" height='200' width="200" style={{position:"absolute" ,top:100, right:20,borderRadius:"50%"}}/>
        </Box>

      </Modal>
    </div>
  );
}
