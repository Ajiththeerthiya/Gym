import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import BannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '150px', xs: '70px' },
            ml: { sm: '20px' },
        }} position="relative" p="20px">
            <Typography fontSize="26px" color="#ff2625" fontWeight="600">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '44px', xs: '40px', sm: '42px' }
            }} lineHeight='37px' mt='20px' mb='30px'>Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography fontFamily='Alegreya' fontWeight='500'>Check out the most effective exercises personalized to you</Typography>
            <Stack>
                <a href="#ExploreExercise" style={{
                    textDecoration: 'none', marginTop: '45px',
                    textalign: 'center', width: '200px', background: '#FF2625', padding: '14px', fontSize: '22px', color: 'white', borderRadius: '4px', textTransform: 'none', textAlign: 'center'
                }}>Explore Exercises</a>
            </Stack>
            <Typography fontSize='200px' sx={{
                opacity: '0.1', display: {
                    lg: 'block',
                    xs: 'none'
                }
            }} color='#FF2625' fontWeight={600}>Exercise</Typography>
            <img src={BannerImage} alt="" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner