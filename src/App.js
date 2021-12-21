import React from 'react';
import MainPage from "./components/MainPage"
import Sessions from "./components/Sessions"
import Seats from "./components/Seats"
import Success from './components/Success';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage/>}></Route>
        <Route path="/sessoes/:idMovie" element={<Sessions/>}></Route>
        <Route path="/assentos/:idSessao" element={<Seats/>}></Route>
        <Route path="/sucesso" element={<Success/>}></Route>
				
			</Routes>
		</BrowserRouter>
    
  );
}

export default App;
