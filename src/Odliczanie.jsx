import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Odliczanie.css";
import { godzinaMinutaDoSekund, sekundyDoGodzinMinutSekund } from "./utils.js";
import kosz from "./kosz.gif";
import koszstatic from "./kosz.png"

const Odliczanie = props => {

    const sekundyLekcja = godzinaMinutaDoSekund(props.czasG, props.czasM);
    const sekundyTeraz = godzinaMinutaDoSekund(props.obecnyCzas.godzina, props.obecnyCzas.minuta) + props.obecnyCzas.sekunda;

    const pozostaloSekund = sekundyLekcja - sekundyTeraz;
    const pozostaloSekundTekst = pozostaloSekund > 0 ? sekundyDoGodzinMinutSekund(pozostaloSekund) : pozostaloSekund > 45*60 ? "ta lekcja odbędzie się dopiero jutro"  : "Lekcja Trwa";

    const [animating, setAnimating] = useState(false)

    setInterval(() => {
        
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
            <div class="nazwa">{props.id} - <strong>{props.name}</strong> ___ {props.czasG} : {props.czasM}</div>
            <div className="operacje">
                <b id='iks' onClick={() => {changeGif();}}><img src={animating ? kosz : koszstatic} alt="kosz" ></img></b>
                <i id='edycja' onClick={() => props.edytujLekcje(props.id)}>[E]</i>
            </div>
            <p><i> do tej lekcji pozostało jeszcze: </i> {pozostaloSekundTekst}</p>
            
        </div>
    )
}

Odliczanie.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    czasM: PropTypes.number,
    czasG: PropTypes.number,
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