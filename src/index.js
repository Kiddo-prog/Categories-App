import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NftPage from './routes/nft';
import About from './components/Nft/About/About';
import StockRouter from './routes/stock';
import NewsRouter from './routes/news';
import WeatherRoute from './routes/weather';
import { ChakraProvider } from '@chakra-ui/react';
import {Provider} from 'react-redux';
import { store } from './features/store';
import Trending from './components/Nft/Trending/Trending';
import SportRouter from './routes/sport'
import Fixtures from './components/Sport/Fixtures/fixtures';
import League from './components/Sport/League/league';
import Standings from './components/Sport/Standings/standings'
import Dashboard from './components/Sport/Dashboard';
import LiveScoreDetail from './components/Sport/Dashboard/LiveScore/detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='nft' element={<NftPage />}>
        <Route path='about' element={<About />}/>
        <Route path='trending' element={<Trending />} />
      </Route>
      <Route path='stock' element={<StockRouter />}/>
      <Route path='news' element={<NewsRouter />}/>
      <Route path='weather' element={<WeatherRoute />}/>
      <Route path='sport' element={<SportRouter />}>
        <Route path='' index element={<Dashboard />}/>
        <Route path='fixtures' element={<Fixtures />} />
        <Route path='league' element={<League />} />
        <Route path='standings' element={<Standings />} />
        <Route path='livescore/:id' element={<LiveScoreDetail />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
