import React from 'react';
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

export default function LiveScoreDetail(){
    const liveDetail = useSelector((state) => state.sport.live)
    return(
        <>
        {liveDetail?.result?.map(item => (
            <div key={item.event_key}>
                <p>{item.event_home_team}</p>
            </div>
          ))}
        </>
    )
}