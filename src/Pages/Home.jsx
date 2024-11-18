import { Box } from '@mui/material'
import { React, useState } from 'react'

import HeroBanner from '../Component/HeroBanner'
import Exercises from '../Component/Exercises'
import SearchExercies from '../Component/SearchExercies'

const Home = () => {

    const [exercises, setExercises] = useState([])

    return (
        <Box>
            <HeroBanner />
            <SearchExercies setExercises={setExercises}  />
            <Exercises exercises={exercises} setExercises={setExercises} />
        </Box>
    )
}

export default Home