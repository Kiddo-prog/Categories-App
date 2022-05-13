import axios from 'axios'

export const API_KEY = 'd01a0d803b321b6b82966a6dce886253';
export const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

const NFT_API_KEY = '7cb2b07919msh6f2f22bb838759bp14b7fejsn3b190eafcbd0'
const options = {
    method: 'GET',
    url: 'https://webit-nft-search.p.rapidapi.com/collections/trending',
    headers: {
      'X-RapidAPI-Host': 'webit-nft-search.p.rapidapi.com',
      'X-RapidAPI-Key': NFT_API_KEY
    }
}
export async function nftApi(){
    try{
        const response = await fetch('https://webit-nft-search.p.rapidapi.com/collections/trending', options)
        const data = response.json()
        // console.log(data)
        return data;
    }
    catch(error){
        console.log(error)
    }

}
                        

// Stock api
export const stockBaseQueryApi = axios.create({
    baseURL: 'https://www.alphavantage.co/query?'
}
    )
    

const SPORT_API_KEY = "bad98f7fe41b3c28672b96da1a008f68bd55c5d12a312b9d80eee4796cc03e51"

export async function sportBaseQuery(query){
    const request = await fetch(`https://apiv2.allsportsapi.com/football/?met=${query}&APIkey=${SPORT_API_KEY}`, {
        method: 'GET'
    })
    const response = await request.json()
    console.log(response)
    return response

}