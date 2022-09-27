// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route }

import  { HashRouter, Routes, Route } from "react-router-dom";



// import LatestProducts from './LatestProducts.js';


// import Examplecheck from './Examplecheck.js';
// import ExmReapeatCom11 from './ExmReapeatCom11.js';
// import Landing from '../src/pages/landing.js';
// import ExCheckbox from './ExCheckbox11.js';



function Navigation() {
    return <>
        <HashRouter>
            <Routes>
             
         
                <Route path = "/" element = {<LatestProducts11/>}></Route>
                <Route path = "/LatestProducts" element = {<LatestProducts/>}></Route>
                
        
                

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


