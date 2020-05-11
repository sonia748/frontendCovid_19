import React, { useState, useEffect } from "react";
import {fetchDailyData, fetchData} from "../../Api";
import { Line, Bar } from "react-chartjs-2";
import styles from './chart.module.css';

const Chart = (props) => {

    const [dailyData, setDailyData] = useState({});


    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

        const lineChart = (
            dailyData.length
            ? (
                <Line data={{
                labels: dailyData.map(({ date }) => date ),
                    datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Confirmed',
                        borderColor: '#3333ff',
                        fill: true,

                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }]
                }}/>
                ) : null
        );

        const barChart = (
            props.confirmed
            ? (
                <Bar data={{
                    labels: ['Infected.value', 'Recovered.value', 'Deaths.value'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)',],
                        data: [ props.confirmed, props.recovered, props.deaths ]
                    }]
                }}
                     options={{
                         legend: { display: false },
                         title: { display: true, text: `Current state in CA`},
                     }}
                />
                ): null
        )
    return (
        <div className={styles.container}>
            {props.country ? barChart: lineChart}
        </div>

    )
}
export default Chart;