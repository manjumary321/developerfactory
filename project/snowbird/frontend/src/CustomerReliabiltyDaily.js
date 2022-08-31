
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

        },

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

            beginAtZero: true,
            min: 0,
            max: 7,

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

function CustomerReliabiltyDaily() {

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


    const [datasets, setDatasetsArray] = useState([]);

    useEffect(() => {

        // var comarray;
        // var inprogarray;
        // var todoarray;

        const graphdata = {
            labels: ['2022-06-13', '2022-06-14', '2022-06-15', '2022-06-16', '2022-06-17'],


            datasets: [
                {
                    label: 'Planned Daily',

                    data: [
                        datasets.map((itemc, index) => itemc.task),

                    ],
                    backgroundColor: '#4286F3',
                    barPercentage: .9,
                    categoryPercentage: .5
                },
                {
                    label: 'Completed Daily',

                    data: [
                        datasets.map((itemc, index) => itemc.task),

                    ],

                    backgroundColor: '#EA4235',
                    barPercentage: .9,
                    categoryPercentage: .5
                },
            ],
        }


        const url = "https://mshz9mao62.execute-api.us-west-2.amazonaws.com/Barchart"
        const request = {};
        const header = {};
        axios.post(url, request, header)
            .then((response) => {
                graphdata.labels = response.data.labels;
                setDatasetsArray(response.data);
                setChartdata(graphdata)
            })

            .catch((err) => {
                console.log(err);
            })


    }, [])

    return <>
        <Bar options={options} data={chartdata} />
    </>
}
export default CustomerReliabiltyDaily;