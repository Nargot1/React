import React, { Component } from "react";
import EdycjaLekcji from "./Edycja";
import Odliczanie from "./Odliczanie"
class Powitanie extends Component {
    constructor(){
        super();
        this.state = {
            Lekcje: [
                {id:0,name:"Lekcja 1",czasG:"7",czasM:"40"},
                {id:1,name:"Lekcja 2",czasG:"8",czasM:"30"},
                {id:2,name:"Lekcja 3",czasG:"9",czasM:"20"},
                {id:3,name:"Lekcja 4",czasG:"10",czasM:"10"},
                {id:4,name:"Lekcja 5",czasG:"11",czasM:"10"},
                {id:5,name:"Lekcja 6",czasG:"12",czasM:"10"},
            ],
            edytowaneLekcje: {
                id: 6,
                name: "",
                czasG: ""
            }
        }
        this.dodanieLekcji = this.dodanieLekcji.bind(this);
        this.zapisanieLekcji = this.zapisanieLekcji.bind(this);
    }

    usunLeckje(id){
        this.setState(prevState=> {
            return{
                Lekcje: [...prevState.Lekcje.filter(x => x.id !== id)]
            }
        })
    }

    dodanieLekcji(val){
        this.setState(prevState=> {
            return{
                edytowaneLekcje: Object.assign(prevState.edytowaneLekcje,val)
            }
        })
    }

    zapisanieLekcji(){
        this.setState(prevState=> ({
            Lekcje: [...prevState.Lekcje, prevState.edytowaneLekcje],
            edytowaneLekcje: {
                id: 6,
                name: "",
                czasG: ""
            }
        }))
    }

    render(){
        const Lekcje = this.state.Lekcje.map(element => {
            return <Odliczanie id={element.id} name={element.name} czasG={element.czasG} czasM={element.czasM} OnDelete = {() => this.usunLeckje(element.id)}/>
        })
        return(
            <div className="EdycjaLekcji">
                {Lekcje}
                <EdycjaLekcji
                    name = {this.state.edytowaneLekcje.name}
                    czasG = {this.state.edytowaneLekcje.czasG}
                    czasM = {this.state.edytowaneLekcje.czasM}
                    onInputChange = 
                    {
                        val => this.dodanieLekcji(val)
                    }
                    onSave = {
                        () => this.zapisanieLekcji()
                    }
                ></EdycjaLekcji>
            </div>
         ) 
    }
};

export default Powitanie;