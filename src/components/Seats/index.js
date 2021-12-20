import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';
import SeatItem from './SeatItem';

function Seats()
{

    const params = useParams();
    console.log(params);

    const [seats, setSeats] = useState([]);

    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${params.idSessao}/seats`);

		request.then(answer => {
			setSeats(answer.data);
            
		});
	}, []);

    let nome = "";
    let cpf = "";
    let allselected = [];

    function getName (name)
    {
        nome = name;
    }

    function getCPF (CPF)
    {
        cpf = CPF;
    }

    function send()
    {
        var elements = document.getElementsByClassName("selected");

        for (let i=0; i<elements.length; i++)
        {
            allselected.push(elements[i].id);
        }
        console.log(allselected);
    }

    if(seats.length != 0)
    return(

        <div className="mobileLayout">

            <div className="topBar">CINEFLEX</div>

            <div className="titleBar">Selecione o(s) assento(s)</div>

            <div className="displaySeats">
            
                {seats.seats.map(seat => <SeatItem id={seat.id} isAvailable={seat.isAvailable} name={seat.name}/>)}

            </div>

            <div className="tips">
                <div className="tipsContent">
                    <div className="selected seat"></div>
                    Selecionado
                </div>
                <div className="tipsContent">
                    <div className="seat available"></div>
                    Disponivel
                </div>
                <div className="tipsContent">
                    <div className="seat unavailable"></div>
                    Indisponivel
                </div>
                
            </div>

            <div className="textBoxes">
                Nome do comprador:
                <input type="text" onKeyDown={getName(this.value)} placeholder="        Digite seu nome..."></input>
                CPF do comprador
                <input type="text" onKeyDown={getCPF(this.value)} placeholder="        Digite seu CPF..."></input>

            </div>

            <div onClick={send()} class="finishButton">Reservar assento(s)</div>

            

            




            <div className="bottomBar">
                <img src={seats.movie.posterURL}></img>
                <div className="noFlex">
                    <div>{seats.movie.title}</div>
                    <div>{seats.day.weekday} - {seats.day.date}</div>
                </div>

            </div>

        </div>
        
        );
    else
    {
        return(
        <div>Loading</div>
    );
    }
    
}

export default Seats;