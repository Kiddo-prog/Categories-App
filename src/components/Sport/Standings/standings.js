import { Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSportStandings } from '../../../features/sport/sportSlice';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box
  } from '@chakra-ui/react'

export default function Standings(){
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchSportStandings(3))
    }, [dispatch])

    const standing = useSelector((state) => state.sport.standings.result)
    console.log(standing)
    
    return(
        <>
        <Box>
        <TableContainer my={10}>
            <Heading textAlign="center">Home Team</Heading>
            {standing?.home?.map(item => (
                <Table key={item.team_key} variant='striped' colorScheme='teal'>
                    <Thead>
                    <Tr>
                        <Th>Place</Th>
                        <Th>Team Name</Th>
                        <Th isNumeric>P</Th>
                        <Td isNumeric>W</Td>
                        <Th isNumeric>GD</Th>
                        <Th isNumeric>PTS</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{item.standing_place}</Td>
                        <Td>{item.standing_team}</Td>
                        <Td>{item.standing_P}</Td>
                        <Td>{item.standing_W}</Td>
                        <Td>{item.standing_GD}</Td>
                        <Td isNumeric>{item.standing_PTS}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            ))}
            </TableContainer>
            
            <TableContainer my={10}>
            <Heading textAlign="center">Away</Heading>
            {standing?.away?.map(item => (
                <Table key={item.team_key} variant='striped' colorScheme='teal'>
                    <Thead>
                    <Tr>
                        <Th>Place</Th>
                        <Th>Team Name</Th>
                        <Th isNumeric>P</Th>
                        <Td isNumeric>W</Td>
                        <Th isNumeric>GD</Th>
                        <Th isNumeric>PTS</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{item.standing_place}</Td>
                        <Td>{item.standing_team}</Td>
                        <Td>{item.standing_P}</Td>
                        <Td>{item.standing_W}</Td>
                        <Td>{item.standing_GD}</Td>
                        <Td isNumeric>{item.standing_PTS}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            ))}
            </TableContainer>
        </Box>
        </>
    )
}

