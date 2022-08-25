
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
import datalabels from "chartjs-plugin-datalabels";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    datalabels
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "right",
            // show:true
        },
        // responsive: true,
        // plugins: {
        //   legend: {
        //     position: "right",
        //   },
        title: {
            display: true,
            text: "Commitment Reliability - Daily",
            font: {
                weight: "bold",
                size: "20rem",
                paddingbottom: "20px"
            },
        },
        datalabels: {
            display: true,
            color: "black",
            align: "top",
            anchor: "end",
            font: {
                size: "14"
            }
        },
    },
    scales: {
        y: {
            // ticks:{
            // display:true,
            beginAtZero: true,
            min: 0,
            max: 7,
            // stepSize:5,
            // },
            scaleLabel: {
                display: true,
                labelString: "Y text",
            },
        },
        x: {
            grid: {
                color: "white",
            }
        }
    }
};


// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,datalabels);

// const options = {
//     responsive: true,
//     plugins: {
       
//         legend: {
//             position: 'right',
//         },
//         title: {
//             display: true,
//             text: 'Commitment Reliability-Daily',
//             font:{
//                 weight:'bold',
//                 size:'20rem',
//                 paddingbottom: "20px"
//             },
//         },
    
//     datalabels:{
//         display:true,
//         color:"black",
//         align:"top",
//         anchor:"end",
//         font:{
//             size:"14"
//         },
//     },
//     }
//     scales: {
//         y: {
//             // ticks:{
//             // display:true,
//             beginAtZero: true,
//             min: 0,
//             max: 7,
//             // stepSize:5,
//             // },
//             scaleLabel: {
//                 display: true,
//                 labelString: "Y text",
//             },
//         },
//         x: {
//             grid: {
//                 color: "white",
//             }
//         },
   
//     },
// } 
function CustomerReliabiltyDaily() {
    // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
       
    const [chartdata, setChartdata] = useState(

        {
            labels: ['2022-06-13', '2022-06-14', '2022-06-15', '2022-06-16', '2022-06-17'],
            datasets: [
                {
                    label: 'Planned Daily',
                    data: [5, 6, 3.5, 4.5, 4],
                    backgroundColor: '#4286F3',
                    barPercentage: 1,
                    categoryPercentage: .5
                },
                {
                    label: 'Completed Daily',
                    data: [6, 2.5, 3, 5, 5.5],
                    backgroundColor: '#EA4235',
                    barPercentage: 1,
                    categoryPercentage: .5
                },
            ],
        }

    );
    // const [fromlambda, setFromLambda]=useState([4,1,2,1]);
    // const [fromlambda1, setFromLambda1]=useState([3,2,.5,1]);
   
    const [datasets,setDatasetsArray]= useState([]);

    useEffect(() => {
       
        var comarray;
        var inprogarray;
        var todoarray;
        // var comarray1;
        // var inprogarray1;
        // var todoarray1;
        const graphdata= {
             labels: ['2022-06-13', '2022-06-14', '2022-06-15', '2022-06-16', '2022-06-17'],
           //labels: [ ],

            datasets: [
                {
                    label: 'Planned Daily',
                   //data: [5, 6, 3.5, 4.5, 4],
                    data: [
                         comarray.map((itemc, index) => itemc.task),
                         inprogarray.map((itemi, index) => itemi.inprogress),
                         todoarray.map((itemt, index) => itemt.task),
                        ],
                    backgroundColor: '#4286F3',
                    barPercentage: .9,
                    categoryPercentage: .5
                },
                {
                    label: 'Completed Daily',
                    //data: [6, 2.5, 3, 5, 5.5],
                    data: [
                        comarray.map((itemc, index) => itemc.task),
                        inprogarray.map((itemi, index) => itemi.inprogress),
                        todoarray.map((itemt, index) => itemt.task),
                       ],
                    // data2: [
                    //     comarray1.map((itemc, index) => itemc.task1),
                    //     inprogarray1.map((itemi, index) => itemi.inprogress1),
                    //     todoarray1.map((itemt, index) => itemt.task1),
                    //     ],
                    backgroundColor: '#EA4235',
                    barPercentage: .9,
                    categoryPercentage: .5
                },
            ],
        }
        graphdata.labels= ['2022-06-13', '2022-06-14', '2022-06-15', '2022-06-16', '2022-06-17'];
        // graphdata.datasets[0].data=[5, 6, 3.5, 4.5, 4];
        // graphdata.datasets[1].data=[6, 2.5, 3, 5, 5.5];
        // graphdata.labels= [];
        //  graphdata.datasets[0].data=[];
        //  graphdata.datasets[1].data=[];
         setChartdata(graphdata)

        
       
        const url="https://mshz9mao62.execute-api.us-west-2.amazonaws.com/Barchart"
        const request ={};
        const header = {};
            axios.post(url, request, header)
                    .then(response => {
                        // console.log(response.data);
                        // setChartdata(response.data);
                        graphdata.labels= response.data.labels;
                        // graphdata.datasets[0].data=response.data.datasets1
                        // graphdata.datasets[1].data=response.data.datasets2;
                        // graphdata.setDatasetsArray(response.data.datasets1);
                        // graphdata.setDatasetsArray(response.data.datasets2);
                        setDatasetsArray(response.data.datasets1);
                        setDatasetsArray(response.data.datasets2);
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
    // 
    
  //------------------------------------------------------------------ 
    // const options = {
    //     responsive: true,
    //     plugins: {
    //         // datalabels: {
    //         //     anchor: 'end',
    //         //     align: 'end',
    //         //     labels: {
    //         //       value: {
    //         //         color: 'blue',
    //         //       }
    //         //     }
      
    //         //   },
    //         legend: {
    //             position: 'right',
    //         },
    //         title: {
    //             display: true,
    //             text: '',
    //             position: 'top',
    //         },
    //     },
    // }

    
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
    //------------------
    
    return <>
        <Bar options={options} data={chartdata} />
    </>
}
export default CustomerReliabiltyDaily;