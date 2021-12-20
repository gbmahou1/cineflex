import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage()
{

    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		request.then(answer => {
			setMovies(answer.data);
		});
	}, []);

    return(

        <div className="mobileLayout">

            <div className="topBar">CINEFLEX</div>

            <div className="titleBar">Selecione o filme</div>

            <div className="displayMovies">

                {movies.map(movie => <div id={movie.id} onClick={() => window.location.href = `/sessoes/${movie.id}`}><img src={movie.posterURL}></img></div>)}
		        
            </div>

        </div>
        
        );
}

export default MainPage;