import React from "react";
import style from "./YandexMap.module.css"
import {YMaps, Map} from 'react-yandex-maps';

class YandexMap extends React.Component {


    render() {
        return (
            <div className={style.container}>
                <YMaps >
                    <Map className={style.Map} defaultState={{center: [58.654520, 56.275120], zoom: 6}}/>
                </YMaps>
            </div>
        )
    }
}

export default YandexMap;