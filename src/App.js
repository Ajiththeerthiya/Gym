import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import { Box } from '@mui/system';

const App = () => (
  <Box width='400px' sx={
    {
      width:
        { xl: '1488px' }
    }
  } m='auto'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='exercise/id' element={<ExerciseDetails />} />
    </Routes>
    <Footer />
  </Box>
)

export default App;
