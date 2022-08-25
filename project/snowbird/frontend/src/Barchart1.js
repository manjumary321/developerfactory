
import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

function Barchart1() {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
    // const [fromlambda, setFromLambda]=useState([5,27,38]);
    // const [fromlambda1, setFromLambda1]=useState([10,30,40]);


    
    const [chartdata, setChartdata] = useState(

        {
            labels: ['2022-03-12', '2022-04-12', '2022-05-12', '2022-06-12', '2022-07-12'],
            datasets: [
                {
                    label: 'Planned Daily',
                    data: [9, 7, 6, 4, 3],
                    backgroundColor: '#4286F3',
                    barPercentage: 1,
                    categoryPercentage: .5
                },
                {
                    label: 'Completed Daily',
                    data: [9, 4, 8, 4, 2],
                    backgroundColor: '#EA4235',
                    barPercentage: 1,
                    categoryPercentage: .5
                },
            ],
        }

    );
    // const [fromlambda, setFromLambda]=useState([4,1,2,1]);
    // const [fromlambda1, setFromLambda1]=useState([3,2,.5,1]);

    useEffect(() => {
        const graphdata= {
            labels: ['2022-03-12', '2022-04-12', '2022-05-12', '2022-06-12', '2022-07-12'],
            datasets: [
                {
                    label: 'Planned Daily',
                    data: [9, 7, 6, 4, 3],
                    backgroundColor: '#4286F3',
                    barPercentage: 1,
                    categoryPercentage: .5
                },
                {
                    label: 'Completed Daily',
                    data: [9, 4, 8, 4, 2],
                    backgroundColor: '#EA4235',
                    barPercentage: 1,
                    categoryPercentage: .5
                },
            ],
        }
        graphdata.labels= ['2022-03-12', '2022-04-12', '2022-05-12', '2022-06-12', '2022-07-12'];
        graphdata.datasets[0].data=[4, 7, 6, 4, 3];
        graphdata.datasets[1].data=[9, 4, 8, 9, 2];
        setChartdata(graphdata)

        
        axios.post("https://mshz9mao62.execute-api.us-west-2.amazonaws.com/Barchart")
                    .then(response => {
                        // setChartdata(response.data);
                        graphdata.labels= response.data.labels;
                        graphdata.datasets[0].data=response.data.datasets1
                        graphdata.datasets[1].data=response.data.datasets2;
                        setChartdata(graphdata)
        
                    })
                    .catch(err => {
                        console.log(err);
                    })
        

    },[])

    // setChartdata({
    //     // const labels = ['Sprint1', 'Sprint2', 'Sprint3']
    //     // const labels = ['27/6/22', '28/6/22', '29/6/22']
    //     data: {
    //         labels: ['Inprogress', 'Review', 'to-do', 'completed'],
    //         datasets: [
    //             {
    //                 label: 'Red',
    //                 data: [4, 1, 2, 1],
    //                 backgroundColor: 'red',
    //                 barPercentage: .9,
    //                 categoryPercentage: .5
    //                 // scales: {
    //                 //     y: {
    //                 //         min: 0,
    //                 //         max: 800
    //                 //     }
    //                 // },
    //                 // data: fromlambda,

    //                 // data: labels.map(() => Math.random({ min: 0, max: 1000 })),
    //                 // data:[
    //                 //       comarry.map((itemc,index)=>itemc.task),
    //                 //       inprog.map((itemi,index)=>itemi.inprogress),
    //                 //       toarray.map((itemt,index)=>itemt.task)
    //                 //     ],
    //             },
    //             {
    //                 label: 'Green',
    //                 data: [3, 2, 5, 1],
    //                 backgroundColor: 'green',
    //                 barPercentage: .9,
    //                 categoryPercentage: .5
    //                 // scales: {
    //                 //     y: {
    //                 //         min: 0,
    //                 //         max: 600
    //                 //     }
    //                 // },
    //                 // data: fromlambda1,

    //             },
    //         ],

    // },

    // })

    // }, []);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: '',
                position: 'top',
            },
        },
    }
    // const chart = () => {

    //     axios.post("https://mshz9mao62.execute-api.us-west-2.amazonaws.com/Barchart")
    //         .then(response => {
    //             setChartdata(response.data);
    //             console.log(response.data);

    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // useEffect(() => {
    //     chart();
    // }, []);

    return <>
        <Bar options={options} data={chartdata} />
    </>
}
export default Barchart1;