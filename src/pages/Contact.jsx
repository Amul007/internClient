import { Box, Stack, Typography, Dialog } from '@mui/material';
import React, { useState } from 'react';
import ContactTable from '../components/ContactTable';
import NewContactForm from "../components/Contact/AddNewContact"

const Contact = () => {
  const [openForm, setOpenForm] = useState(null);

  const handleClose = () => {
    setOpenForm(null);
  };

  const Item = ({ children, bgcolor, fontcolor, border, hover = "", onClick }) => (
    <Box
      sx={{
        paddingX: 7,
        paddingY: "4px",
        background: bgcolor,
        color: fontcolor,
        borderRadius: 1,
        textAlign: 'center',
        border: border,
        cursor: "pointer",
        '&:hover': {
          background: hover
        }
      }}
      onClick={onClick}
    >
      <Typography variant="body1" fontSize={"13px"} fontWeight={600}>{children}</Typography>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          width: "94%",
          background: "#F8F8FF",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          margin: 0,
          marginX: "auto"
        }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", background: "#F8F8FF" }}>
          <Stack direction={"row"} alignItems={"flex-end"} gap={3}>
            <Item
              bgcolor="#FFFFFF"
              fontcolor="black"
              border="2px solid grey"
              onClick={() => setOpenForm('add')}
            >
              Create Contacts
            </Item>
            <Item
              bgcolor="#7F2DF1"
              fontcolor="white"
              border="2px solid #7F2DF1"
              hover="#711ee6"
             
            >
              Import Contacts
            </Item>
          </Stack>
        </Box>
        <Box>
          <ContactTable />
        </Box>
      </Box>
      
      <Dialog 
        open={openForm !== null} 
        onClose={handleClose} 
        disableEscapeKeyDown 
        disableBackdropClick 
      >
        {openForm === 'add' && <NewContactForm onClose={handleClose} />}
        {/* {openForm === 'import' && <ImportContactForm onClose={handleClose} />} */}
      </Dialog>
    </>
  );
}

export default Contact;
