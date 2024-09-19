import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import shoeImg from '../assets/images/shoeImg.png'
import amazonImg from '../assets/images/amazonImg.png'
import flipkartImg from '../assets/images/flipkartImg.png'
import '../App.css'

export default function HeroSection() {
  return (
    <>
      <Box sx={{ width: "80%", margin: "auto", paddingTop: "40px", boxSizing: "border-box", display: "flex" }}>
        
        {/* heading and sub-heading */}
        <Box sx={{display: "flex", textAlign: "start", flexDirection: "column"}}>
          <Typography variant='h2' fontWeight={800} fontSize={"50px"}>
            YOUR FEET DESERVE THE BEST
          </Typography>
          <Typography className='mt' color='#5A5959'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </Typography>

          {/* buttons */}
          <Box className='mt' sx={{display: "flex", gap: 2}}>
            <Button variant='contained' sx={{backgroundColor: "#D01C28"}}>Shop Now</Button>
            <Button variant='outlined'sx={{borderColor: "red", color: "red"}}>Category</Button>
          </Box>

          {/* social media platforms */}
          <Box sx={{marginTop: "30px"}}>
            <Typography>Also Available On</Typography>
            <div style={{display: "flex", gap: 15, alignContent: "center", marginTop: "10px"}}>
              <img src={flipkartImg} alt="flipkartLogo" />
              <img src={amazonImg} alt="amazonLogo" />
            </div>
          </Box>
        </Box>
 
        {/* hero image */}
        <Box>
          <img src={shoeImg} alt='shoe img' />
        </Box>

      </Box>
      
    
    </>
  )
}
