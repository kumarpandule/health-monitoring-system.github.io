import dynamic from 'next/dynamic';
import React, {useEffect, useState } from "react";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: true });

function ECGMonitor() {
    const [chartOptions, setChartOptions] = useState({
        chart: {
          id: 'realtime-line-chart',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          min: 0,
          max: 100,
        },
        stroke: {
          curve: 'smooth',
        },
      });
    
      const [chartData, setChartData] = useState([
        {
          name: 'Real-Time Line Chart',
          data: [],
        },
      ]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setChartData((prevState) => {
            const newData = [...prevState[0].data];
            newData.push({
              x: new Date().getTime(),
              y: Math.floor(Math.random() * 100),
            });
            return [{ data: newData }];
          });
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
      return (
          <div className="w-full h-full py-2">
           <div className=' flex flex-col md:flex-row gap-4 mx-2 md:mx-8 text-gray6 dark:text-gray1'>
            <div className=' basis-3/4 flex flex-col w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800'>
            <div className=' basis-1/12'>
            <h2 className=' basis-1/4 p-2'>Heart Rhythm <span>{"( - )"}</span></h2>
            </div>
            <div className=' basis-11/12'>
            <Chart options={chartOptions} series={chartData} type="line" height={400} />
            </div>
            </div>
            <div className=' basis-1/4 flex flex-col gap-4'>
            <div className=' basis-1/2 p-2 flex flex-col w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800'>
            <h2 className=' basis-1/4'>Heart Rate <span>{"( bpm )"}</span></h2>
            <h1 className=' basis-3/4 text-6xl text-center py-4'>90</h1>
            </div>
            <div className=' basis-1/2 p-2 flex flex-col w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800'>
            <h2 className='basis-1/4'>Temprature <span>{"( C )"}</span></h2>
            <h1 className=' basis-3/4 text-6xl text-center py-4'>30</h1>
            </div>
            </div>
           </div>
          </div>
      );
    };

export default ECGMonitor
