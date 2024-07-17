import { Box, Typography, capitalize } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box sx={{width: "100%", background: "white", height: "3rem"}}>
       <Typography 
        fontSize={"22px"}
        fontWeight={"700px"}
        textTransform={"capitalize"}
        >
            
        </Typography>     
    </Box>
  )
}

export default Navbar