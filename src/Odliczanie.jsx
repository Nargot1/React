import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Odliczanie.css";
import kosz from "./kosz.gif";
import koszstatic from "./kosz.png"

const Odliczanie = props => {
    const [animating, setAnimating] = useState(false)

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
            {props.id} - <strong>{props.name}</strong> ___ {props.czasG} : {props.czasM}
            <div className="operacje">
                <b id='iks' onClick={() => {changeGif();}}><img src={animating ? kosz : koszstatic} alt="kosz" ></img></b>
                <i id='edycja' onClick={() => props.edytujLekcje(props.id)}>[E]</i>
            </div>
        </div>
    )
}

Odliczanie.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    czasM: PropTypes.number,
    czasG: PropTypes.number,
    edytujLekcje: PropTypes.func,
    OnDelete: PropTypes.func
}

export default Odliczanie;