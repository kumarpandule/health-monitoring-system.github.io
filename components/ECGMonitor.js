import { useState, useEffect} from "react";
import { getDoc, onSnapshot, doc } from "firebase/firestore";
import { db } from '@lib/firebase';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function ECGMonitor() {
  const [data, setData] = useState([]);

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

  const [ecgData, setECGData] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: 'realtime',
      height: 350,
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
      type: 'numeric',
      range: 1400,
      labels: {
        show: false,
      },
    },
    yaxis: {
      max: 1000,
      min: -500,
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
      newECGData.push({
        x: Date.now(),
        y: data.Pulse,
      });
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
            <ApexCharts options={options} series={[{ data: ecgData }]} type="line" height={350} />
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
