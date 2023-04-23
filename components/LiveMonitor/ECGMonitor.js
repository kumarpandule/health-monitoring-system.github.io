import { useState, useEffect} from "react";
import { getDoc, onSnapshot, doc } from "firebase/firestore";
import { db } from '@lib/firebase';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function ECGMonitor() {
  const [data, setData] = useState([]);
  const [ecgData, setECGData] = useState([{ x: Date.now(), y: 1 }]);

  useEffect(() => {
    const docRef = doc(db, "devices", "0001");

    // Get initial data
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setData({...doc.data()});
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    // Get real-time updates
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setData({...doc.data()});
      } else {
        console.log("No such document!");
      }
    });
    return () => unsubscribe();
  }, []);

  const [options, setOptions] = useState({
    chart: {
      id: 'realtime',
      height: 450,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 600,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: 'datetime',
      range: 60 * 60,
      labels: {
        show: true,
      },
      categories: [''],
    },
    yaxis: {
      max: 1000,
      min: -1600,
      tickAmount: 25,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    markers: {
      size: 0,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newECGData = [...ecgData];
      const pulse = Math.floor(Math.random() * 1000);
  
      if (pulse >= -300 && pulse <= 300) {
        // Pulse input is within range, set y value to a fixed value
        newECGData.push({
          x: Date.now(),
          y: 1,
        });
      } else if (pulse > 600) {
        // Pulse input is greater than 600, create an array of ECG data points
        const pulseArray = [
          { y: 64 },
          { y: 168},
          { y: 272 },
          { y: 300 },
          { y: 400 },
          { y: 500 },
          { y: 600 },
          { y: 700 },
          { y: 896 },
          { y: 792 },
          { y: 688 },
          { y: 584 },
          { y: 480 },
          { y: 376 },
          { y: 272 },
          { y: 168 },
          { y: 64 },
          { y: -40 },
          { y: -144 },
          { y: -352},
          { y: -664 },
          { y: -768 },
          { y: -872 },
          { y: -1200 },
          { y: -1100 },
          { y: -1000 },
          { y: -900 },
          { y: -800 },
          { y: -900 },
          { y: -1000 },
          { y: -1184 },
          { y: -1288 },
          { y: -872 },
          { y: -768 },
          { y: -664 },
          { y: -352},
          { y: -144 },
          { y: -40 }
        ];
        const ecgArray = pulseArray.map((digit) => ({
          x: Date.now(),
          y: digit.y,
        }));
        newECGData.push(...ecgArray);
      } else {
        // Pulse input is outside the specified range, do not add a new ECG data point
        return;
      }
  
      if (newECGData.length > 1000) {
        newECGData.shift();
      }
      setECGData(newECGData);
    }, 100);
  
    return () => clearInterval(interval);
  }, [ecgData]);

      return (
        <>
          <div className="w-full h-full py-2">
           <div className=' flex flex-col md:flex-row gap-4 mx-2 md:mx-8 text-gray6 dark:text-gray1'>
            <div className=' basis-3/4 flex flex-col w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800'>
            <div className=' basis-1/12'>
            <h2 className=' basis-1/4 p-2'>Heart Rhythm <span>{"( - )"}</span></h2>
            </div>
            <div className=' basis-11/12'>
            <ApexCharts options={options} series={[{ data: ecgData }]} type="line" height={450} />
            </div>
            </div>
            <div className=' basis-1/4 flex flex-col gap-4'>
            <div className=' basis-1/2 p-2 flex flex-col w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800'>
            <h2 className=' basis-1/4'>Analog Value <span>{"( ECG )"}</span></h2>
            <h1 className=' basis-3/4 text-6xl text-center py-4'>{data.Pulse}</h1>
            </div>
            <div className=' basis-1/2 p-2 flex flex-col w-full overflow-hidden rounded-lg shadow-xs bg-white dark:bg-gray-800'>
            <h2 className='basis-1/4'>Temprature <span>{"( C )"}</span></h2>
            <h1 className=' basis-3/4 text-6xl text-center py-4'>{data.Temprature}</h1>
            </div>
            </div>
           </div>
          </div>
        </>
      );
    };
