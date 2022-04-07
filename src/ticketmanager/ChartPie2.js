import React, { useState, useEffect,useRef } from 'react';
import ReactDOM from 'react-dom';

import { Doughnut, Pie } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import { Chart } from 'chart.js/auto';
import "./HomePage.css"






export default function ChartPie2() {
    const data = {
        labels: [
         
        
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [28302, 30256],
          backgroundColor: [
            'rgb(255, 161, 20)',
            'rgb(2, 110, 250)',
            
          ],
         
        }]
      };
      const config = {
        type: 'doughnut',
        data: data,
      };
    
    
  return (
    <div  className='chart-donut'>
       <Doughnut {...config}
         style={{ maxHeight: '200px' }}
       />

      
    </div>
  )
}
