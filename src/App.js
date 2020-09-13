import React from 'react';
import './App.css';
import YandexMap from "./component/YandexMap/YandexMap";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' render={() => <YandexMap/>}/>
                {/*<Route exact path='/description' render={() => <AlertDescription/>}/>*/}
            {/*  после хорошего сна допилить*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
