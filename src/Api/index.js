import axios from 'axios';

const url = "https://api.covid19api.com/summary";

//Fatch Data

export const fetchData = async () =>{
    try {
        const { data: { confirmed, recovered, deaths}} = await axios.get(url);

        const modifiedData ={

            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,

        }
        return modifiedData;
    } catch(error){

        }
    }
