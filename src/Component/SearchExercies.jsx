import { Stack, TextField, Typography, Box, Button } from '@mui/material'
import { React, useState } from 'react'
import { options, fetchData } from "../utils/fetchData";

const SearchExercies = ({ setExercises }) => {

  const [search, setSearch] = useState('')

  const searchHandler = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);

      const searchedExercise = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercise)
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography sx={{
        fontSize: {
          lg: '40px',
          sm: '35px',
          xs: '30px'
        },
        marginTop: '37px',
      }}
        fontWeight="700px"
        textAlign="center"
        fontFamily="Alegreya"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="20px" mt="20px">
        <TextField

          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: {
              lg: '1000px', xs: '350px'
            },
            backgroundColor: '#fff',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercies"
          type="text"
        ></TextField>
        <Button className="search-btn"
          sx={{
            backgroundColor: '#ff2526',
            color: '#fff',
            position: 'absolute',
            height: '55px',
            width: {
              lg: '100px',
              xs: '80px'
            },
            right: '0px'
          }}
          onClick={searchHandler}
        >Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercies