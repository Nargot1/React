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
            [
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [
                    {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                    {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                    {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                    {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                    {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                    {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                ],
                [],
                []
            ],
                [
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [
                        {id:uniqid(),name:"Lekcja 1",czasG:7,czasM:40},
                        {id:uniqid(),name:"Lekcja 2",czasG:8,czasM:30},
                        {id:uniqid(),name:"Lekcja 3",czasG:9,czasM:20},
                        {id:uniqid(),name:"Lekcja 4",czasG:10,czasM:10},
                        {id:uniqid(),name:"Lekcja 5",czasG:11,czasM:10},
                        {id:uniqid(),name:"Lekcja 6",czasG:12,czasM:10}
                    ],
                    [],
                    []
                ],
            ],
            edytowaneLekcje: {
                id: uniqid(),
                name: -1,
                czasG: -1
            },
            week: 0,
            day: 0,
            currentWeek: 0,
            currentDay: new Date().getDay()-1,
        }
        this.dodanieLekcji = this.dodanieLekcji.bind(this);
        this.zapisanieLekcji = this.zapisanieLekcji.bind(this);
        this.usunLeckje = this.usunLeckje.bind(this)
        this.EdycjaLekcji = this.EdycjaLekcji.bind(this)
        this.odswiezanie = this.odswiezanie.bind(this)
        this.changeDay = this.changeDay.bind(this)
        this.changeWeek = this.changeWeek.bind(this)
        this.correctName = false;
        this.correctHour = false;
        this.correctMinute = false;
    }

    EdycjaLekcji(id){
        this.setState(prevState => ({
            edytowaneLekcje: {...prevState.Lekcje.at(this.state.week).at(this.state.day).find(element => element.id === id)}
        }))
    }

    usunLeckje(id){
        this.setState(prevState=> {
            return{
                Lekcje: [...prevState.Lekcje.at(this.state.week).at(this.state.day).filter(x => x.id !== id)]
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
            const czyLekcjaJuzIstnieje = prevState.Lekcje.at(this.state.week).at(this.state.day).find(
                element => element.id === prevState.edytowaneLekcje.id
            );
            let aktualizowanieLekcji;
            if(czyLekcjaJuzIstnieje)
            {
                aktualizowanieLekcji = prevState.Lekcje.at(this.state.week).at(this.state.day).map(element=>
                {
                    if ( element.id === prevState.edytowaneLekcje.id)
                        return prevState.edytowaneLekcje;
                    else
                        return element;
                })
            }
            else
            {
                aktualizowanieLekcji = [...prevState.Lekcje.at(this.state.week).at(this.state.day),prevState.edytowaneLekcje]
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
        }, () => localStorage.setItem("Lekcje", JSON.stringify(this.state.Lekcje)));
    }

    componentDidMount(){
        const listaLekcji = JSON.parse(localStorage.getItem("Lekcje")) || [];

        //this.setState({Lekcje: listaLekcji});
        setInterval(this.odswiezanie, 1000);
    }
    changeWeek(e){
        this.state.week = e.target.value;
    }
    changeDay(e){
        this.state.day = Number.parseInt(e.target.value);
    }

    render(){
        const Lekcje = this.state.Lekcje.at(this.state.week).at(this.state.day).map(element => {
            return <Odliczanie key={element.id} id={element.id} name={element.name} czasG={element.czasG} czasM={element.czasM} obecnyCzas = {this.state.czas} day = {this.state.day} currentDay={this.state.currentDay} currentWeek={this.state.currentWeek} week = {this.state.week} OnDelete = {() => this.usunLeckje(element.id)} edytujLekcje = {id => this.EdycjaLekcji(id)}/>
        })
        const nWeek = [];
        const nDay = [[],[]];
        for (let index = 0; index < this.state.Lekcje.length; index++) {
            nWeek[nWeek.length] = <option value={index}>Tydzien {nWeek.length+1}</option>
            for (let days = 0; days < this.state.Lekcje.at(this.state.week).length-1; days++) {
                nDay[index][days] = <option value={days}>Dzien {days+1}</option>
            }
        }


        return(
            <div className="EdycjaLekcji">
                <select name="week" id="week" onChange={(e) => this.changeWeek(e)} >
                    {nWeek}
                </select>
                <select name="day" id="day" onChange={(e) => this.changeDay(e)} >
                    {nDay.at(this.state.week)}
                </select>
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