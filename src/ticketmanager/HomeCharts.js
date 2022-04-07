import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import {Area} from '@ant-design/plots'
import './HomePage.css'
export default function HomeCharts() {
    
        
   const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };
      const config = {
         data,
         xField: 'timePeriod',
         yField: 'value',
         xAxis: {
           range: [0, 1],
         },
         smooth: true,
         areaStyle: {
           fill: 'l(270) 0:#ffffff 0.5:#fef3ed 1:#feede1',
           fillOpacity: 0.7,
           stroke: 'white',
           lineWidth: 2,
           strokeOpacity: 1,
           shadowOffsetX: 10,
           shadowOffsetY: 10,
           cursor: 'pointer',
         },
         line: {
           size: 3,
         },
         color: '#f7a156',
       
         
       };
       

    return (
        <div>
            <p className='p-thongke'>Thống kê</p>
            <div className='div-doanhthu'>
              <p className='p-doanhthu-p'>Doanh Thu</p>
              <input className='input-title' type="date" value="2021-04-01" />
            </div>
            <div className='chart'>
               <Area {...config} />
            </div>
        </div>
    )
    
}
