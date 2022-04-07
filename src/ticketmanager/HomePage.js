import React from 'react'
import ChartPie from './ChartPie'
import ChartPie2 from './ChartPie2'
import HomeCharts from './HomeCharts'

export default function HomePage() {
  return (
    <div className='chart'>
      <div className='chart-area'>
        <HomeCharts />
      </div>
      <div className='chart-pie'>
        <div className='doanhthu'>
          <span className='span-doanhthu'>tổng doanh thu theo tuần</span>
          <p className='p-doanhthu'>525.145.000 <i className='i-doanhthu'>đồng</i></p>
        </div>
        <div className='chart-size'>
          <div className='danhthu-input'>
            <input className='input-doanhthu' type="date" value="2021-04-01" placeholder='' />
          </div>
          <div className='chart-pie1'>
            <p className='p-chart'>Gói gia đình</p>
            <ChartPie />
          </div>
          <div className='chart-pie2'>
            <p className='p-chart'>Gói sự kiện</p>
            <ChartPie2 />
          </div>
          <div className='chart-chuthich'>
              <div className='chart-fex'>
              <div className='chuthich-giadinh'></div><p className='p-chuthich'>Vé đã sử dụng</p>
              </div>
              <div className='chart-fex'>
              <div className='chuthich-sukien'></div><p className='p-chuthich'>Vé chưa sử dụng</p>
              </div>
          </div>
        </div>
      </div>

    </div>

  )
}
