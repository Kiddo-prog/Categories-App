import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const nftSlice = createSlice({
    name: 'nft',
    initialState,
    reducers: {
        trending: (state, {payload}) => {
            state.items = payload
        }
    }
})

export const { trending } = nftSlice.actions
export const getTrendingList = (state) => state.nft.items
export default nftSlice.reducer