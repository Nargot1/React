import React from "react";
import Odliczanie from "./Odliczanie"
const Powitanie = () => {
    return(
        <div>
            <Odliczanie name="Lekcja 1" czas="7:45"/>
            <Odliczanie name="Lekcja 2" czas="8:35"/>
            <Odliczanie name="Lekcja 3" czas="9:25"/>
            <Odliczanie name="Lekcja 4" czas="10:15"/>
            <Odliczanie name="Lekcja 5" czas="11:15"/>
            <Odliczanie name="Lekcja 6" czas="12:15"/>
        </div>
    )
};

export default Powitanie;