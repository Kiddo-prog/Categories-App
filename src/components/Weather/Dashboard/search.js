import React, {useState, useEffect} from 'react'
import { Button, Input, Box } from '@chakra-ui/react'
import { fetchAsyncWeather, getWeather } from '../../../features/weather/weatherSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchField() {
    const selector = useSelector(getWeather)
    const dispatch = useDispatch()
    const [item, setItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncWeather(item));
    }
    
  return (
    <>
    <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '2em'
    }}>
    <form onSubmit={handleSubmit} method='GET'>
        <Input placeholder="Search" size='md' value={item} onChange={(e) => setItem(e.target.value)}/>
        <Button type='submit'>Search</Button>
    </form>
    {/* {selector.name} */}
    </Box>
    </>
  )
}
