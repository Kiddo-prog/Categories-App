import React from "react"
import {Box, SimpleGrid, Text} from '@chakra-ui/react'
import { Link } from "react-router-dom"

export function Main(){
    const links = {
        textDecoration: 'none'
      }
    return(
        <>
        <SimpleGrid columns={3} spacing={10} textAlign='center' m="3em">
        <Link to='/nft' style={links}>
        <Box bg='tomato' height='80px' p='3em'>
            <Text fontSize='2em' color='white' fontWeight='bold'>NFT</Text>
        </Box>
        </Link>
        <Link to='/news' style={links}>
        <Box bg='green' height='80px' p='3em'>
            <Text fontSize='2em' color='white' fontWeight='bold'>News</Text>
        </Box>
        </Link>
        <Link to='/weather' style={links}>
        <Box bg='purple' height='80px' p='3em'>
            <Text fontSize='2em' color='white' fontWeight='bold'>Weather</Text>
        </Box>
        </Link>
        <Link to='/stock' style={links}>
        <Box bg='orange' height='80px' p='3em'>
            <Text fontSize='2em' color='white' fontWeight='bold'>Company Stock</Text>
        </Box>
        </Link>
        <Link to='/sport' style={links}>
        <Box bg='red' height='80px' p='3em'>
            <Text fontSize='2em' color='white' fontWeight='bold'>Sports</Text>
        </Box>
        </Link>
        </SimpleGrid>
        </>
    )
}
