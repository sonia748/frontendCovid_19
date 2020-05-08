  import React from "react";
// import GlobalStats from './Components/global'

   import Cards from "./Components/Cards/Cards";
   import Chart from "./Components/Chart/Chart";
   import CountrySelector from "./Components/CountrySelector/CountrySelector";

   import { fetchData} from "./Api";
  import styles from './App.modules.css';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

          async componentDidMount() {
              const fetchedData = await fetchData();
              this.setState({data: fetchedData });
          }

          handleCountryChange = async (country) =>{
              const fetchedData = await fetchData(country);
              this.setState({data: fetchedData, country: country });
          }
          render() {

                  const { data, country } = this.state;
                  return(
                  <div className={styles.container}>
                      <h1>COVID-19 Tracker</h1>
                      <Cards data={ data }/>
                      <Chart/>
                      <CountrySelector handleCountryChange = {this.handleCountryChange}/>
                  </div>
              );
          }
      }

      export default App;
