import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import datalabels from "chartjs-plugin-datalabels";
import axios from "axios";


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

function CustomerReliabiltyDaily1() {
    
    //  const [charData,setChartdata] = useState({});
    const [fromVariable, setFromVariable] = useState([5, 6, 3.5, 4.5, 4]);
    const [fromVariable1, setFromVariable1] = useState([6, 2.5, 3, 5, 5.5]);

    const data = {
        labels: ["6-13-2022", "6-14-2022", "6-15-2022", "6-16-2022", "6-17-2022"],
        datasets: [
            {
                label: "Planned Cumulative",
                // data: [5, 6, 3.5, 4.5, 4],
                data: fromVariable,
                backgroundColor: "blue",
                barPercentage: .9,
                categoryPercentage: .5
            },
            {
                label: "Completed Cumulative",
                //data: [6, 2.5, 3, 5, 5.5],
                data: fromVariable1,
                backgroundColor: "red",
                barPercentage: .9,
                categoryPercentage: .5
            },
        ],
    };
    // data.labels= ['2022-06-13', '2022-06-14', '2022-06-15', '2022-06-16', '2022-06-17'];
    // data.datasets[0].data=(setFromVariable);
    // data.datasets[1].data=(setFromVariable1);
    // setChartdata(data);
     
     
    // useEffect(()=>{
    //     data();
    // })

    // const url="https://mshz9mao62.execute-api.us-west-2.amazonaws.com/Barchart"
    // const request ={};
    // const header = {};
    // axios.post(url, request, header)
    //       .then((response) => {
    //     console.log(response.data);
    //   }, (error) => {
    //     console.log(error);
    //   })
    //   .catch((err )=> {
    //     console.log(err);
    // });


    return (<>
        <div style={{ maxWidth: "90%" }}>
            <Bar options={options} data={data} />
        </div>
    </>
    )
}

export default CustomerReliabiltyDaily1;