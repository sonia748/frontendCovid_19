import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

 //Fetch Data

   export const fetchData = async (country) => {
       let changeUrl = url;

       if (country){
           changeUrl = `${url}/countries/${country}`;
       }
           try {
               const {data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl);

               return { confirmed, recovered, deaths, lastUpdate };
    }catch (e) {

           }

           }


     export const fetchDailyData = async () => {

         try {
             const {data} = await axios.get(`${url}/daily`);
             const modifiedData = data.map((dailyData) => ({
                 confirmed: dailyData.confirmed.total,
                 deaths: dailyData.deaths.total,
                 date: dailyData.reportDate,
             }));
             return modifiedData;
         } catch (e) {
         }


     }
      export const fetchCountries = async () => {
       try {
         const countries = await axios.get(`${url}/countries`);



            //console.log(countries.data.countries)
        return countries.data.countries.map((country) => country.name);
             }catch (e) {
//
         console.log(e);
//
       }
    }
