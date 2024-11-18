import { Typography, Box, Stack } from '@mui/material';
import React from 'react'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises }) => {
  return (
    <Box id="exercises" sx={{
      mt: {
        lg: '30px',
        ms: '25px',
        xs: '20px'
      }
    }} p="20px">
      <Typography variant="h3" mb="30px">Showing Result</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {
          exercises.map((exercise) => (
            < ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        }
      </Stack>
    </Box>
  )
}

export default Exercises