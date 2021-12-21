import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';

export default function Success()
{
    const params = useParams();
    console.log(params);


    return (
        <div class="mobileLayout">

            <div className="topBar">CINEFLEX</div>

            <div className="successHead">Pedido feito com sucesso!</div>

            <div className="topic">
                Filme e Sessão
            </div>

            <div className="topic">
                Ingressos
            </div>

            <div className="topic">
                Comprador
            </div>
            
            <div onClick={()=> window.location.href = `/`}className="homeButton">Voltar pra Home</div>
        </div>
    );
}