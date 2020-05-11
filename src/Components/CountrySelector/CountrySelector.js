import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl} from "@material-ui/core";
import styles from './countrySelector.module.css';
import { fetchCountries } from "../../Api";

const CountrySelector = ( props )=> {


    const [fetchedCountries, setFetchedCountries] = useState(["Canada"]);

    let dummyFetchedCountries=["Canada","US"]




    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());


        }


        fetchAPI();
    },[setFetchedCountries]);

    return (

        <div>
            <FormControl className={styles.formControl}>
                {/*<NativeSelect defaultValue="" onChange={(e) =>(e.target.value)}>*/}
                <NativeSelect defaultValue="" onChange={(e)=>props.handleCountryChange(e.target.value)}>
                    <option value="Global">Global</option>
                    {fetchedCountries.map((country, i) =>  <option key = {i} value ={country}>{country}</option> )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}



export default CountrySelector;