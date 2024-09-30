import React, { Component } from "react";
import Odliczanie from "./Odliczanie"
class Powitanie extends Component {
    constructor(){
        super();
        this.state = {
            Lekcje: [
                {id:0,name:"Lekcja 1",czas:"7:45"},
                {id:1,name:"Lekcja 2",czas:"8:35"},
                {id:2,name:"Lekcja 3",czas:"9:25"},
                {id:3,name:"Lekcja 4",czas:"10:15"},
                {id:4,name:"Lekcja 5",czas:"11:15"},
                {id:5,name:"Lekcja 6",czas:"12:15"},
            ]
        }
    }
    render(){
        const Lekcje = this.state.Lekcje.map(element => {
            return <Odliczanie name={element.name} czas={element.czas}/>
        })
        return(
            <div>
                {Lekcje}
            </div>  
        )
    }
};

export default Powitanie;