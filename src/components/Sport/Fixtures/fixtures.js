import React from 'react';
import { useSelector } from 'react-redux'
import { Heading, Box } from '@chakra-ui/react';

export default function Fixtures(){
    const fixtures = useSelector((state) => state.sport.fixtures)
    return(
        <>
        <Heading>
        Fixtures
        </Heading>
        {/* <Box>
            {fixtures && fixtures.map(item => (
                <div key={}>

                </div>
            ))}
        </Box> */}
        </>
        
    )
}