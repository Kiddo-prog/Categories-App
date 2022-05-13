import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'P700VJ7PV0YLL4UK'
export const fetchStockAsync = createAsyncThunk(
    async () => {
        const response = await axios.get(`function=SYMBOL_SEARCH&keywords=tesco&apikey=${API_KEY}`)
        return response.data;

    }
)

export const fetchForexAsync = createAsyncThunk(
    async() => {
        const response = await axios.get(`function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY${API_KEY}`)
        return response
    }
)


const initialState = {
    stock: {},
    forex: {}
}

const stockSlice = createSlice({
    name: 'stock',
    initialState,
    extraReducers: {
        [fetchStockAsync.pending] : (state) => {
            console.log('Pending')
        },
        [fetchStockAsync.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                stock: payload
            }
        },
        [fetchStockAsync.rejected]: (state) => {
            console.log('Rejected')
        },
        [fetchForexAsync.fulfilled]: (state, payload) => {
            return {
                ...state,
                forex: payload
            }
        },
    }
})


export const { getForex } = (state) => state.stock.forex
export default stockSlice.reducer