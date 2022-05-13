import React, {useEffect} from 'react'
import About from '../components/Nft/About/About';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Nft/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { nftApi } from '../lib/api';
import { trending } from '../features/nft/nftSlice'

export default function NftPage(){
const dispatch = useDispatch()
useEffect(() => {
  const fetchNftApi = async () => {
        const request = await nftApi()   
        const response = await JSON.stringify(request)
        dispatch(trending(response))
  }
  fetchNftApi()
}, [dispatch])

return(
    <>
    <Dashboard />
    <Outlet />
    </>
)
}