import React from "react";
import {ChartDiv} from "./playerChartStyle";
import BarChart from '@bit/recharts.recharts.bar-chart';
import Bar from '@bit/recharts.recharts.bar';
// import XAxis from '@bit/recharts.recharts.x-axis';

const Chart = props => {
    const data = props.chartData.list
    console.log("Hello form chart", data)
    return(
        <ChartDiv>
            <BarChart width={1000} height={550} data={data}>

                <Bar dataKey="count" fill="#F7F7FF"/>
            </BarChart>
        </ChartDiv>
    )
}

export default Chart;