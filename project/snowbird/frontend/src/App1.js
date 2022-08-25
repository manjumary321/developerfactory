import "./style.css";
import React from 'react'
import snowlogo from "./image/snowlogo.png";
import menu from "./image/menu.png";
import search from "./image/search.png";
import downarrow from "./image/downarrow.png";
import cross from "./image/close.png";
import add from "./image/add.png";
import Barchart from "./Barchart";
// import Barchart1 from "./Barchart1";


function App1(){

 
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
            <li><label>Reports <img src= {downarrow}/> </label>
                <ul>
                  <li>velocity Reports</li>
                  <li>Capacity Utilization Report</li>
                  <li>velocity Reports</li>
                </ul>  
            </li>
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
                <Barchart/>
            {/* <Bar options={options} data={data} /> */}
        </div>
      </div>
    </div>
    </>
}
export default App1;