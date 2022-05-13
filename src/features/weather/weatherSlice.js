import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, weatherApi } from "../../lib/api";

export const fetchAsyncWeather = createAsyncThunk('weather/fetchAsyncWeather', 
        async (city) => {
        const response = await weatherApi.get(
            `weather?q=${city}&appid=${API_KEY}`
            );
            return response.data
        // dispatch(addWeather(response.data));
    }
);

const initialState = {
    weather: []
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addWeather: (state, {payload}) => {
            state.weather = payload
        }
    },
    extraReducers: {
        [fetchAsyncWeather.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncWeather.fulfilled] : (state, {payload}) =>{
            console.log('Successful')
            return{
                ...state,
                weather: payload
            }
        },
        [fetchAsyncWeather.rejected]: () => {
            console.log('Error loading data')
        }
    }
})

export const { addWeather } = weatherSlice.actions
export const getWeather = (state) => state.weather.weather
export default weatherSlice.reducer