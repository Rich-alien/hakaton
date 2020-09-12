import React from "react";
import style from "./YandexMap.module.css"
import {YMaps, Map, Placemark} from 'react-yandex-maps';

class YandexMap extends React.Component {

    mapData = {
        center: [58.654520, 56.275120],
        zoom: 6,
    };

    ForestDescription = [
        {
            id:0,
            XY:[60.733070, 56.703531],
            img1:"",
            img2:"",
            Name:"Чердынский городской округ",
            HasTrees:true,
            S:100,
        },
        {
            id:1,
            XY:[60.730479, 56.700604],
            img1:"",
            img2:"",
            Name:"Чердынский городской округ",
            HasTrees:true,
            S:100,
        },
        {
            id:2,
            XY:[57.483593, 54.547379],
            img1:"",
            img2:"",
            Name:"озимовая пшеница, Черновское сельское поселение",
            HasTrees:true,
            S:100,
        },
        {
            id:3,
            XY:[57.024849, 57.550066],
            img1:"",
            img2:"",
            Name:"подсолнечник",
            HasTrees:true,
            S:100,
        },

    ]
    OnOpen = (id) => {

    }

    render() {
        return (
            <div className={style.container}>
                <YMaps>
                    <Map className={style.Map} defaultState={this.mapData}>
                        {this.ForestDescription.map((el,id) => <Placemark onClick={this.OnOpen(id)} geometry={el.XY}/>)}
                    </Map>
                </YMaps>
            </div>
        )
    }
}

export default YandexMap;