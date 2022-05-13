import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/weatherSlice'
import nftReducer from './nft/nftSlice'
import stockReducer from './stock/stockSlice'
import sportReducer from './sport/sportSlice'

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        nft: nftReducer,
        stock: stockReducer,
        sport: sportReducer
    }
})