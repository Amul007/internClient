import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from '@mui/material';
import axios from "axios"
const DeleteContact = ({onClose, deletedContact}) => {
    console.log("This is delete id to be deletet")
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        onClose()
    };
    const handleDelete = async() => {
        try {
            console.log("get api is also fired");
            const response = await axios.put(`http://localhost:7000/api/v1/contact/${id}`, data);
            console.log(response.data);
            onClose();
          } catch (error) {
            console.error("Error adding contact:", error.response.data);
          }
        };
        
    return (
        <div className='new'>
          <Box sx={{background: "white", borderRadius:"5px"}}>
            <DialogTitle id="alert-dialog-title">
              {"Confirm the action"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you really want to delete the contact Amit kumar
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined">Cancel</Button>
              <Button onClick={handleClose} autoFocus variant="contained" color='error' startIcon={<DeleteIcon/>}>
                Delete
              </Button>
            </DialogActions>
          </Box>
        </div>
      );
}

export default DeleteContact