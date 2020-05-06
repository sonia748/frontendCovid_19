import React from "react";

import GlobalStats from './Components/global'
import cards from "./Components/Cards/cards";
import chart from "./Components/Chart/chart";
import countrySelector from "./Components/CountrySelector/countrySelector";

import { fetchData} from "./Api";
import styles from './App.modules.css';


function App(){


    return (

        <div>
                <h1>Covid-19 Tracker</h1>

                <GlobalStats/>

        </div>
    )
}




export default App;