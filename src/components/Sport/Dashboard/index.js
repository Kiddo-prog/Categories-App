import React, { useEffect } from 'react';

import { fetchSportAsync, fetchSportFixtures, fetchSportLiveScores } from '../../../features/sport/sportSlice';
import LiveScore from './LiveScore/live';
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import { Heading, Box } from '@chakra-ui/react';
import LiveScoreDetail from './LiveScore/detail';

export default function Dashboard(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

    const sport = useSelector((state) => state.sport.sport)
    const fixtures = useSelector((state) => state.sport.fixtures)
    const liveScore = useSelector((state) => state.sport.live)
    console.log(liveScore)
    console.log(fixtures)
    console.log(sport)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchSportAsync("Leagues"))
      dispatch(fetchSportFixtures("Fixtures"))
      dispatch(fetchSportLiveScores("Livescore"))

    }, [dispatch])
    
    const returnLive = (liveScore?.result?.map(item => (
      <>
      <LiveScore key={item.event_key} live={item} />
      {/* <LiveScoreDetail key={item.event_key } detail={item} /> */}
      </>
      )));
    return(
        <>
        <Box my="2em">
        <Heading>Live Score</Heading>
        <Slider {...settings}>
            {returnLive}
        </Slider>

        <Heading>Fixtures</Heading>
        </Box>
        </>
    )
}