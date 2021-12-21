import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';

export default function Success()
{
    return (
        <div class="mobileLayout">

            <div className="topBar">CINEFLEX</div>

            <div className="successHead">Pedido feito com sucesso!</div>
            
        </div>
    );
}