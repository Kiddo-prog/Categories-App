import React, { useState } from 'react';
import { Heading, Box, Image, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { Link, useHref } from 'react-router-dom'


export default function League(){
    // const href = useHref("#")
    // const [loading, setLoading] = useState(true)
    const league = useSelector((state) => state.sport.sport.result)
    const linkStyle = {
        _hover: {
            boxShadow: '1px 5px 10px #000'
        }
    }
    return(
        <>
        <Heading>
            League
        </Heading>
        <Box>
            <SimpleGrid columns={[1, 2, 3]} p='1em' mx='1em'>
            {league && league.slice(0, 30).map((item) => (
                <Box key={item.league_key} _hover={{boxShadow: '1px 5px 10px #000', transition: '0.3s ease-in'}} p="1.5em">
                    <Link to="#" style={linkStyle}>
                    <Heading size="md" mb={5}>{item.league_name}</Heading>
                    <Image src={item.league_logo} objectFit='cover' boxSize='150px' alt="Logo" />
                    </Link>
                </Box>
            ))}
            </SimpleGrid>
        </Box>
        </>
    )
}