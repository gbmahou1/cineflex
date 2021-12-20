import React from 'react';
import MainPage from "./components/MainPage"
import Sessions from "./components/Sessions"
import Seats from "./components/Seats"
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage/>}></Route>
        <Route path="/sessoes/:idMovie" element={<Sessions/>}></Route>
        <Route path="/assentos/:idSessao" element={<Seats/>}></Route>
				
			</Routes>
		</BrowserRouter>
    
  );
}

export default App;
