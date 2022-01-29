import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePage from './components/SinglePage';

 const App = () => {
   return (
     
     <BrowserRouter>
      <Routes>
       <Route path='/' element={
         <>
           <SinglePage/>
         </>
      }/>
      </Routes>
     </BrowserRouter>
   )
 };
 
 export default App;
 