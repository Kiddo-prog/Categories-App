import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../../features/weather/weatherSlice';
import { Box, Heading, Text } from '@chakra-ui/react';
import { fetchAsyncWeather } from '../../../features/weather/weatherSlice';
import SearchField from './search';


export default function Dashboard() {
  const selector = useSelector(getWeather);
  const boxStyle = {
    margin: '5em auto',
    padding: '2em',
    borderRadius: '50px',
    background: '#e0e0e0',
    boxShadow:  '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
  };
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncWeather('london'))
    }, [dispatch])
    
  return (
    <>
    <Heading mt={5} fontSize="3.5em" textAlign="center">
        Weather App
    </Heading>
    <SearchField />
    <Box style={boxStyle} maxW='80%'>
    <Heading mb={['0.5em', '1.1em', '1.4em']} textAlign='center'>City: {selector.name}</Heading>
      <Box style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Box>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>
      <Text mb='0.5em' fontSize={20} fontWeight='bold'>{Math.round(selector?.main?.temp - (273))}<sup>o</sup>C</Text>
        </Box>
      </Box>
      </Box>
      </>
  )
}

