import { AppBar, Box, Button, IconButton, Link, MenuItem, Toolbar } from '@mui/material'
import React from 'react'
import brandLogo from '../assets/images/brand_logo.png'

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo */}
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <img
            src={brandLogo}
            alt="logo"
            style={{ height: 40, width: "80" }}
          />
        </IconButton>

        {/* Menu items */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {['Menu', 'Location', 'About', 'Contact'].map((item) => (
            <MenuItem key={item} sx={{ color: 'black', fontWeight: 'bold', mx: 2 }}>
              <Link href="#" color="inherit" underline="none">
                {item}
              </Link>
            </MenuItem>
          ))}
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#b71c1c',
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
