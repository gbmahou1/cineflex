import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';

function Sessions()
{
    const params = useParams();

    const [moviesessions, setMoviesessions] = useState([]);

    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${params.idMovie}/showtimes`);

		request.then(answer => {
			setMoviesessions(answer.data);
            
		});
	}, []);


    const days = moviesessions.days;
    console.log(days);

    if(moviesessions.length != 0)
    return(

        <div className="mobileLayout">

            <div className="topBar">CINEFLEX</div>

            <div className="titleBar">Selecione o horário</div>

            <div className="dayDisplay">
                
                {days.map(day => 

                    <div id={day.id} >
                        
                        {day.weekday} - {day.date}
                        
                        <div className="movieTimes">
                            
                            {day.showtimes.map(times =>
                                <div id={times.id} onClick={() => window.location.href = `/assentos/${times.id}`} className="movieTime">
                                    {times.name}
                                </div>)}

                        </div>


                    </div>
                
                )}
                </div>
                
            

            <div className="bottomBar">
                <img src={moviesessions.posterURL}></img>
                <div>{moviesessions.title}</div>
            </div>

        </div>

        
        );
    else
    return(<div>Loading</div>);
}

export default Sessions;