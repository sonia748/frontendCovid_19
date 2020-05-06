import React,{useEffect,useState} from 'react'
import axios from 'axios'


const GlobalStats =()=>{

    const [globalData,editGlobalData] = useState( {
        "NewConfirmed": 0,
        "TotalConfirmed": 0,
        "NewDeaths": 0,
        "TotalDeaths": 0,
        "NewRecovered": 0,
        "TotalRecovered": 0
    },)

    useEffect(()=>{

        const fetchData=async ()=>{

            try{
                const response = await axios.get("https://api.covid19api.com/summary")

                console.log(response.data.Global)

                editGlobalData(response.data.Global)

            }catch (e) {

                console.log("error"+e)
            }

        }

        fetchData()

    },[])




    return(

        <div>
           <h2>New Confirmed - {globalData.NewConfirmed}</h2>
            <h2>Total Confirmed - {globalData.TotalConfirmed}</h2>
        </div>
    )
}

export default GlobalStats;