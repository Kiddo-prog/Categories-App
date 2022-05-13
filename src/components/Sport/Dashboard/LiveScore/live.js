import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function LiveScore({live}){
  const params = useParams()
    return (
        <>
        <Link to={`livescore/${params.event_key}`}>
      <Box d="flex" justifyContent="center" flexDirection="column" alignItems="center" bgColor="gray.400" color="white" m={2} p="1em">
        <Box d="flex" justifyContent="center" flexDirection="row" alignItems="center">
        <Image src={live.home_team_logo} objectFit="cover" width="50px" alt="league_logo" /> <Text size="lg" fontWeight="bold" fontSize="2em" mx={5}>vs</Text> <Image src={live.away_team_logo} objectFit="cover" width="50px" alt="league_logo" />
        </Box>
        <Text mx={1} mt={3} fontWeight="600">{live.event_home_team} vs {live.event_away_team}</Text>
        <Text>{live.event_final_result}</Text>
      </Box>
        </Link>
        </>
    );
}