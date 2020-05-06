import React from "react";
import { Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from  './cards.modules.css';
import CountUp from 'react-countup';
const cards =({data: {confirmed, recovered, deaths }}) =>{
    if (!confirmed){
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                //First Card
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography Varaint="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={3}
                            separator=','/>

                    </Typography>
                    <Typography color="textSecondary">Real Data</Typography>
                    <Typography Varaint="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>

                //Second Card
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography Varaint="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography Varaint="body2">Numbers of recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography Varaint="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography Varaint="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}



export default cards;