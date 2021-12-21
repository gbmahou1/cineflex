import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';
import SeatItem from './SeatItem';

function Seats()
{
    const params = useParams();

    const [seats, setSeats] = useState([]);

    useEffect(() => {
		const request = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${params.idSessao}/seats`);

		request.then(answer => {
			setSeats(answer.data);
            
		});
	}, []);   

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    
    const [SelectedList, setSelectedList] = useState([]);

    function getName (name)
    {
        setNome(name);
    }

    function getCPF (CPF)
    {
        setCpf(CPF);
        console.log(data);
    }

    function send ()
    {
       axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", data)
        .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.href = `/sucesso`;})
            console.log(data);
    }

    const data = {ids: SelectedList, name: nome, cpf: cpf};

    /*const sucessodata = {name: nome, cpf: cpf, movie: seats.movie.title, weekday: seats.day.weekday, day: seats.day.date};*/

    

    if(seats.length != 0)
    return(

        <div className="mobileLayout">

            <div className="topBar">CINEFLEX</div>

            <div className="titleBar">Selecione o(s) assento(s)</div>

            <div className="displaySeats">
            
                {seats.seats.map(seat => <SeatItem id={seat.id} isAvailable={seat.isAvailable} name={seat.name} SelectedList={SelectedList} setSelectedList={setSelectedList}/>)}

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
                <input type="text" onInput={event => getName(event.target.value)} placeholder="        Digite seu nome..."></input>
                CPF do comprador
                <input type="text" onInput={event => getCPF(event.target.value)} placeholder="        Digite seu CPF..."></input>

            </div>

            <div onClick={() => send()} className="finishButton">Reservar assento(s)</div>

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