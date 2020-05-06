import React from "react";
import cards from "./Components/Cards/cards";
import chart from "./Components/Chart/chart";
import countrySelector from "./Components/CountrySelector/countrySelector";

import { fetchData} from "./Api";

import styles from './App.modules.css';
class App extends React.component {
    state = {
        data: {},
    }

   async ComponentDidMount() {
       const fetchedData = await fetchData();

       this.setState({data: fetchedData});
   }

    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>

                <cards data={data}/>
                <chart/>
                <countrySelector/>
            </div>
        );
    }




}
export default App;