import React from 'react';
import { MainRoutes } from './Routes/MainRoutes';
import "./styles/css/style.css";
import { Header } from './Components/Header';

function App() {
  return (
   <div className='body'>
     <Header/>
     <MainRoutes/>
   </div>
  );
}

export default App;
