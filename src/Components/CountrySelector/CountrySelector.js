import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl} from "@material-ui/core";
import styles from './countrySelector.modules.css';
import { fetchCountries } from "../../Api";

const countrySelector = ({ handleCountriesChange })=> {


    const [fetchedCountries, setFetchedCountries] = useState({});


    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    },[setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) =>(e.target.value)}>
                <option value="Global">Global</option>
                {fetchedCountries.map((country, i) => <option key = {i} value ={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}



export default countrySelector;