import React from "react";

var EdycjaLekcji = props => {
    return(
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="poleTekstowe">Podaj nazwę</label>
                <input type="text" id="name" name="name" onChange={(e) => {
                    props.onInputChange({[e.target.name]: e.target.value})
                    let regex = /^[a-zA-Z]+$/;
                    if(!regex.test(e.target.value)){
                        e.target.style.color = "red";
                        props.correctName(false);
                    }
                    else{
                        e.target.style.color = "black";
                        props.correctName(true);
                    }
                    }} />
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasG">Podaj godzinę</label>
                <input type="tel" id="czasG" name="czasG" onChange={(e) => {
                    props.onInputChange({[e.target.name]: e.target.value})
                    let regex =/^\d+$/;
                    if(!regex.test(e.target.value)){
                        e.target.style.color = "red";
                        props.correctHour(false);
                    }
                    else{
                        e.target.style.color = "black";
                        props.correctHour(true);
                    }
                    }} />
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasM">Podaj minutę</label>
                <input type="tel" id="czasM" name="czasM" onChange={(e) => {
                    props.onInputChange({[e.target.name]: e.target.value})
                    let regex =/^\d+$/;
                    if(!regex.test(e.target.value)){
                        e.target.style.color = "red";
                        props.correctMinute(false);
                    }
                    else{
                        e.target.style.color = "black";
                        props.correctMinute(true);
                    }
                    }} />
            </div>
            <button onClick={()=>{
                    props.onSave();
                }
                }> OK </button>
            <button>Cancel</button>
        </div>
    );
}

export default EdycjaLekcji;