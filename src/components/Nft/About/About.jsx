import React from 'react'
import {useSelector} from 'react-redux'
import { getTrendingList } from '../../../features/nft/nftSlice'

export default function About(){
    const list = useSelector(getTrendingList)
    console.log(list)
    return(
        <h1 style={{textAlign: 'center'}}>About NFT</h1>
        // {list && list.data.results}
    )
}