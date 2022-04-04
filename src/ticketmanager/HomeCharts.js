import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import {Area} from '@ant-design/plots'
export default function HomeCharts() {
    
        const data2 = [
         {
            day: "Thu 2",
            value: "140tr"
         },
         {
            day: "Thu 3",
            value: "180tr"
         },
         {
            day: "Thu 4",
            value: "190tr"
         },
         {
            day: "Thu 5",
            value: "230tr"
         },
         {
            day: "Thu 6",
            value: "220tr"
         },
         {
            value: "250tr"
         },
         {
            day: "Thu 7",
            value: "210tr"
         },
         {
            day: "CN",
            value: "190tr"
         },
        ];
        const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('http://localhost:3000/charts')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };
      const config = {
        data,
        xField: 'day',
        yField: 'value',
        xAxis: {
          range: [0, 1],
        },
      };

    return (
        <div>
            <h1>Thống kê</h1>
            <h2>Doanh Thu</h2>
            <Area {...config} />
        </div>
    )
    
}
