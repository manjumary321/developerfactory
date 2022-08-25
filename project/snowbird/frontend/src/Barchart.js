
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

function Barchart(){
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
// const [fromlambda, setFromLambda]=useState([5,27,38]);
// const [fromlambda1, setFromLambda1]=useState([10,30,40]);

// const [comarry,setComarry]=useState([]);
// const [inprog,setInprog]=useState([]);
// const [toarray,setToarray]=useState([]);

const [fromlambda, setFromLambda]=useState([4,1,2,1]);
const [fromlambda1, setFromLambda1]=useState([3,2,.5,1]);
// const [fromlambda, setFromLambda]=useState([]);
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: '',
      position:'top',
    },
  },
}

// const labels = ['Sprint1', 'Sprint2', 'Sprint3']
// const labels = ['27/6/22', '28/6/22', '29/6/22']
const labels = ['Inprogress', 'Review', 'to-do','completed']
 const data = {
  labels,
  datasets: [
    {
      label: 'Red',
      scales:{y:{min:0,
        max:800}},
        data: fromlambda,
        backgroundColor: 'red',
        barPercentage: .9,
        categoryPercentage: .5
      // data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      // data:[
      //       comarry.map((itemc,index)=>itemc.task),
      //       inprog.map((itemi,index)=>itemi.inprogress),
      //       toarray.map((itemt,index)=>itemt.task)
      //     ],
    },
    {
        label: 'Green',
        scales:{y:{min:0,
        max:600}},
        data: fromlambda1,
        // data: fromlambda1,
        // data: [20,30,40],
        backgroundColor: 'green',
        barPercentage: .9,
        categoryPercentage: .5
      },
  ],
}

 
    return <>
            <Bar options={options} data={data} />
           </>
}
export default Barchart;