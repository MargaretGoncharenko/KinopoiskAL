import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import {Weather} from "./components/Weather/Weather";

function App() {
    return (
        <div className="App">
            <Header/>
            <Weather/>
            <Navigation/>
        </div>
    );
}

export default App;
