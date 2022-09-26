// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route }

import  { HashRouter, Routes, Route } from "react-router-dom";



import LatestProducts11 from './LatestProducts11.js';
import LatestProducts22 from './LatestProducts22.js'




// import Examplecheck from './Examplecheck.js';
import ExmReapeatCom11 from './ExmReapeatCom11.js';
// import Landing from '../src/pages/landing.js';
import ExCheckbox from './ExCheckbox.js';



function Navigation() {
    return <>
        <HashRouter>
            <Routes>
             
         
                <Route path = "/" element = {<LatestProducts11/>}></Route>
                <Route path = "/LatestProducts22" element = {<LatestProducts22/>}></Route>
        
                

{/*                 
                <Route path = "/Examplecheck" element = {<Examplecheck/>}></Route> */}
                <Route path = "/ExmReapeatCom11" element = {<ExmReapeatCom11/>}></Route>
                {/* <Route path = "/Landing" element = {<Landing/>}></Route> */}
                <Route path = "/ExCheckbox" element = {<ExCheckbox/>}></Route>
              
               
               
            </Routes>
        </HashRouter>
    </>
};

export default Navigation;


