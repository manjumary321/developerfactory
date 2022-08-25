import "./style.css";
import React from 'react'
import snowlogo from "./image/snowlogo.png";
import menu from "./image/menu.png";
import search from "./image/search.png";
import downarrow from "./image/downarrow.png";
import cross from "./image/close.png";
import add from "./image/add.png";
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

function App(){
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
const labels = ['27/6/22', '28/6/22', '29/6/22']
 const data = {
  labels,
  datasets: [
    {
      label: 'Red',
      scales:{y:{min:0,
        max:800}},
        data: [10,27,38],
      // data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'red',
    },
    {
        label: 'Green',
        scales:{y:{min:0,
        max:600}},
        data: [20,30,40],
        backgroundColor: 'green',
      },
  ],
}

 
    return <>
    <div className="outer">
      <div className="main_menunbar">
        <div className="snowbirdpic">
          <img src={snowlogo}/>
        </div>
        <div className="main_menunbar_menu">
          <ul>
            <li><label>Home</label></li>
            <li><label>Board</label></li>
            <li><label>Sprint</label></li>
            <li><label>Project</label></li>
            <li><label>Reports</label></li>
          </ul>
        </div>
      </div>
      <div className="row2">
        <div className="main_contentbar_headerbar">
          <div className="main_contentbar_headerbar_left">
            
              <img src= {menu}/>
              <label>Capacity Utilization Report</label>
           
          </div>
          <div className="main_contentbar_headerbar_right">
            <div className="circle">
              <label>AB</label>
            </div>
          </div>
        </div>
        <div className="main_contentbar_search">
          <div className="main_contentbar_search_left">
          <img src= {search}/>
            <input placeholder="Search by order #, name or email..." ></input>
          </div>
          <div className="main_contentbar_search_right">
             <button> Filters<img src= {downarrow}/></button> 
          </div>
        </div>
        <div className="main_contentbar_filters">
           <div className="main_contentbar_filters_inner">
              <button>
                Filters{" "}
                Filters
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button>
                <img className="main_contentbar_filters_inner_add" 
                src={add} 
                />
              </button>
            </div>
          </div>
        <div className="Barcharts">
            <Bar options={options} data={data} />
        </div>
      </div>
    </div>
    </>
}
export default App;