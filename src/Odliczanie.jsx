import React from "react";

const Odliczanie = props => {
    return (
        <div className="odliczanie">
            <strong>{props.name}</strong> {props.czas}
        </div>
    )
}

export default Odliczanie;