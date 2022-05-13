import React from 'react';
import Header from '../components/Sport/Header/header'
import { Outlet } from 'react-router-dom'

export default function SportRouter(){
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}