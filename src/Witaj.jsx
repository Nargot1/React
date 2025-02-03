import React, { Component } from "react";
import EdycjaLekcji from "./Edycja";
import Odliczanie from "./Odliczanie"
import uniqid from "uniqid";

class Powitanie extends Component {
    constructor(){
        super();
        this.state = {
            czas: {
                godzina: new Date().getHours(),
                minuta: new Date().getMinutes(),
                sekunda: new Date().getSeconds()
            },
            Lekcje: [
                {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10},
            ],
            edytowaneLekcje: {
                id: uniqid(),
                name: -1,
                czasG: -1
            }
        }
        this.dodanieLekcji = this.dodanieLekcji.bind(this);
        this.zapisanieLekcji = this.zapisanieLekcji.bind(this);
        this.usunLeckje = this.usunLeckje.bind(this)
        this.EdycjaLekcji = this.EdycjaLekcji.bind(this)
        this.odswiezanie = this.odswiezanie.bind(this)
        this.correctName = false;
        this.correctHour = false;
        this.correctMinute = false;
    }

    EdycjaLekcji(id){
        this.setState(prevState => ({
            edytowaneLekcje: {...prevState.Lekcje.find(element => element.id === id)}
        }))
    }

    usunLeckje(id){
        this.setState(prevState=> {
            return{
                Lekcje: [...prevState.Lekcje.filter(x => x.id !== id)]
            }
        }, () => localStorage.setItem("Lekcje", JSON.stringify(this.state.Lekcje)))
    }

    dodanieLekcji(val){
        this.setState(prevState=> {
            return{
                edytowaneLekcje: Object.assign(prevState.edytowaneLekcje,val)
            }
        }, () => localStorage.setItem("Lekcje", JSON.stringify(this.state.Lekcje)));
    }

    zapisanieLekcji(){
        this.setState(prevState => 
        {
            const czyLekcjaJuzIstnieje = prevState.Lekcje.find(
                element => element.id === prevState.edytowaneLekcje.id
            );
            let aktualizowanieLekcji;
            if(czyLekcjaJuzIstnieje)
            {
                aktualizowanieLekcji = prevState.Lekcje.map(element=>
                {
                    if ( element.id === prevState.edytowaneLekcje.id)
                        return prevState.edytowaneLekcje;
                    else
                        return element;
                })
            }
            else
            {
                aktualizowanieLekcji = [...prevState.Lekcje,prevState.edytowaneLekcje]
            }
            return{
                Lekcje: aktualizowanieLekcji,
                edytowaneLekcje:{
                    id: uniqid(),
                    name: "",
                    czasG: -1,
                    czasM: -1
                }
            }
        }, () => localStorage.setItem("Lekcje", JSON.stringify(this.state.Lekcje)));
    }

    odswiezanie() {
        this.setState({
            czas: {
                godzina: new Date().getHours(),
                minuta: new Date().getMinutes(),
                sekunda: new Date().getSeconds()
            }
        });
    }

    componentDidMount(){
        const listaLekcji = JSON.parse(localStorage.getItem("Lekcje")) || [];

        this.setState({Lekcje: listaLekcji});
        setInterval(this.odswiezanie, 1000);
    }

    render(){
        const Lekcje = this.state.Lekcje.map(element => {
            return <Odliczanie key={element.id} id={element.id} name={element.name} czasG={element.czasG} czasM={element.czasM} obecnyCzas = {this.state.czas} OnDelete = {() => this.usunLeckje(element.id)} edytujLekcje = {id => this.EdycjaLekcji(id)}/>
        })
        
        return(
            <div className="EdycjaLekcji">
                {Lekcje}
                <EdycjaLekcji
                    name = {this.state.edytowaneLekcje.name}
                    czasG = {this.state.edytowaneLekcje.czasG}
                    czasM = {this.state.edytowaneLekcje.czasM}
                    correctName = {val => {this.correctName = val}}
                    correctHour = {val => {this.correctHour = val}}
                    correctMinute = {val => {this.correctMinute = val}}
                    onInputChange =
                    {
                        val => this.dodanieLekcji(val)
                    }
                    onSave = {
                        () => {
                            if(this.correctName && this.correctHour && this.correctMinute)
                                this.zapisanieLekcji()
                            else
                                alert("Niepoprawne dane")
                        }
                    }
                ></EdycjaLekcji>
            </div>
         ) 
    }
};

export default Powitanie;