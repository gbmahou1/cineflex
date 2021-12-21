import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';


export default function SeatItem(props)
{
    const [empty, setEmpty] = useState("");

    function toggle()
    {
        if (empty == "selected")
        {
            setEmpty("");
            for (let i=0; i<props.SelectedList.length; i++)
            {
                if (props.SelectedList[i]==props.id)
                {
                    props.setSelectedList([...props.SelectedList.splice(i, 1)]);
                }
            }
        }
        else
        {
            setEmpty("selected");
            props.setSelectedList([...props.SelectedList, props.id]);
            
        }
    }

    return(

        <div id={props.id} onClick={() => {{props.isAvailable ? toggle() : alert('Esse assento não está disponível')}}} 
                className={`seat ${props.isAvailable ? "available" : "unavailable"} ${empty}`}>
                {props.name}
        </div>

    );
}