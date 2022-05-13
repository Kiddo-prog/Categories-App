import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const SPORT_API_KEY = "bad98f7fe41b3c28672b96da1a008f68bd55c5d12a312b9d80eee4796cc03e51"
export const fetchSportAsync = createAsyncThunk('sport/fetchAsyncSport',
    async(query) => {
        const request = await fetch(`https://apiv2.allsportsapi.com/football/?met=${query}&APIkey=${SPORT_API_KEY}`, {
        method: 'GET'
    })
    const response = await request.json()
    console.log(response)
    return response
    }
)

export const fetchSportFixtures = createAsyncThunk('sport/fetchAsyncFixtures',
    async(query) => {
        const request = await fetch(`https://apiv2.allsportsapi.com/football/?met=${query}&APIkey=${SPORT_API_KEY},2021-05-18&to=2021-05-18`, {
        method: 'GET'
    })
    const response = await request.json()
    console.log(response)
    return response
    }
)

export const fetchSportStandings = createAsyncThunk('sport/fetchAsyncStandings',
    async(query) => {
        const request = await fetch(`https://apiv2.allsportsapi.com/football/?met=Standings&leagueId=${query}&APIkey=${SPORT_API_KEY}`, {
        method: 'GET'
    })
    const response = await request.json()
    console.log(response)
    return response
    }
)

export const fetchSportLiveScores = createAsyncThunk('sport/fetchAsyncLiveScores', 
    async(query) => {
        const request = await fetch(`https://apiv2.allsportsapi.com/football/?met=${query}&APIkey=${SPORT_API_KEY}`, {
            method: 'GET'
        })
        const response = await request.json()
        console.log(response)
        return response
    }
)
const initialState = {
    sport: [],
    fixtures: [],
    standings: [],
    live: []
}

const sportSlice = createSlice({
    name: 'sport',
    initialState,
    extraReducers: {
        [fetchSportAsync.pending]: () => {
            console.log('Pending')
        },
        [fetchSportAsync.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                sport: payload
            }
        },
        [fetchSportAsync.rejected]: () => {
            console.log('Failed')
        },
        [fetchSportFixtures.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                fixtures: payload
            }
        },
        [fetchSportStandings.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                standings: payload
            }
        },
        [fetchSportLiveScores.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                live: payload
            }
        }
    }
})

export const getSport = (state) => state.sport.sport
export default sportSlice.reducer