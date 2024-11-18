import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const NavBar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' px='20px' sx={{
      gap: {
        sm: '123px',
        xs: '40px'
      },
      mt: {
        sm: '32px',
        xs: '20px'
      },
      justifyContent: 'none'
    }}>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      <Stack direction='row' gap="40px" fontFamily="Alegreya" alignItems="flex-end" fontSize="24px" >
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>

        <a href="#ExercisePage" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercise</a>
      </Stack>
    </Stack>
  )
}

export default NavBar