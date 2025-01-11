import React from "react";

const EdycjaLekcji = props => {
    return(
        <div className="EdycjaLekcji">
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="poleTekstowe">Podaj nazwę</label>
                <input type="text" id="name" name="name" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})} />
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasG">Podaj godzinę</label>
                <input type="tel" id="czasG" name="czasG" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <div className="EdycjaLekcji_input-grupa">
                <label htmlFor="czasM">Podaj minutę</label>
                <input type="tel" id="czasM" name="czasM" onChange={(e) => props.onInputChange({[e.target.name]: e.target.value})}/>
            </div>
            <button onClick={()=>props.onSave()}> OK </button>
            <button>Cancel</button>
        </div>
    );
}

export default EdycjaLekcji;