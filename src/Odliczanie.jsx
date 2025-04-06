import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Odliczanie.css";
import { godzinaMinutaDoSekund, sekundyDoGodzinMinutSekund } from "./utils.js";
import kosz from "./kosz.gif";
import koszstatic from "./kosz.png"

const Odliczanie = props => {

    const [color,setColor] = useState("hsl(270, 100%, 50%)");

    const sekundyLekcja = godzinaMinutaDoSekund(props.czasG, props.czasM);
    const sekundyTeraz = godzinaMinutaDoSekund(props.obecnyCzas.godzina, props.obecnyCzas.minuta) + props.obecnyCzas.sekunda;


    const pozostaloSekund = sekundyLekcja - sekundyTeraz;
    const pozostaloSekundTekst = props.week < props.currentWeek ? "Lekcja się zakończyła"
    :
    ((props.week - props.currentWeek)*7 + (props.day+1) - (props.currentDay+1) > 0) ? (pozostaloSekund < 0 ? ( (props.week - props.currentWeek)*7 + (props.day+1) - (props.currentDay+2) == 0 ? "Lekcja odbedzie sie za " + sekundyDoGodzinMinutSekund(86400 + pozostaloSekund) : "Lekcja odbedzie sie za " + ((props.week - props.currentWeek)*7 + (props.day+1) - (props.currentDay+2)) + " dni i " + sekundyDoGodzinMinutSekund(86400 + pozostaloSekund) )
    :
    "Lekcja odbedzie sie za " + ((props.week - props.currentWeek)*7 + (props.day+1) - (props.currentDay+1)) + " dni i " + sekundyDoGodzinMinutSekund(pozostaloSekund))
    :
    props.day < props.currentDay ? "Lekcja się zakończyła"
    : 
    pozostaloSekund > 0 ? ("Lekcja odbedzie sie za: " + sekundyDoGodzinMinutSekund(pozostaloSekund))
    : 
    pozostaloSekund < -45*60 ? "Lekcja się zakończyła"  
    :
    "Lekcja Trwa";

    const [animating, setAnimating] = useState(false);
    setInterval(() => {
        setColor("hsl(" + Math.max(Math.min(((115 * ((pozostaloSekund+(props.day-props.currentDay)*86400)/2700+1))),270),0)+ ", 100%, " + (pozostaloSekund/2700 < -1 ?  (props.day-props.currentDay > 0 ? "50%" : "0%") : "50%") + ")");
    }, 1000);

    const changeGif = () => {
        if(!animating)
        {
            setAnimating(true)
            setTimeout(() => {
                setAnimating(false);
                props.OnDelete();
            },1000)
        }
    }
    return (
        <div className="odliczanie">
            <div style={{color: color}} class="nazwa" id="nazwa">{props.id} - <strong>{props.name}</strong> ___ {props.czasG} : {props.czasM}</div>
            <div className="operacje">
                <b id='iks' onClick={() => {changeGif();}}><img src={animating ? kosz : koszstatic} alt="kosz" ></img></b>
                <i id='edycja' onClick={() => props.edytujLekcje(props.id)}>[E]</i>
            </div>
            <p>{pozostaloSekundTekst}</p>
            
        </div>
    )
}

Odliczanie.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    czasM: PropTypes.number,
    czasG: PropTypes.number,
    week: PropTypes.number,
    day: PropTypes.number,
    currentWeek: PropTypes.number,
    currentDay: PropTypes.number,
    edytujLekcje: PropTypes.func,
    OnDelete: PropTypes.func,
    obecnyCzas: PropTypes.shape(
        {
            godzina: PropTypes.number,
            minuta: PropTypes.number,
            sekunda: PropTypes.number
        }
    )
}

export default Odliczanie;