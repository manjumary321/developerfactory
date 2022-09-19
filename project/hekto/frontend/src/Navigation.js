// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route }

import  { HashRouter, Routes, Route } from "react-router-dom";

import InBetweenBanner1 from './InBetweenBanner1';
import LatestProducts from './LatestProducts.js';
import LatestProducts11 from './LatestProducts11.js';
import FilterBarVertical from './FilterBarVertical.js';
import AdminLogin from './AdminLogin.js';
import OrderCompleted from './OrderCompleted';

// import Examplecheck from './Examplecheck.js';
// import ExmReapeatCom11 from './ExmReapeatCom11.js';
// import Landing from '../src/pages/landing';


function Navigation() {
    return <>
        <HashRouter>
            <Routes>
                <Route path = "/InBetweenBanner1" element = {<InBetweenBanner1/>}></Route>
                <Route path = "/LatestProducts" element = {<LatestProducts/>}></Route>
                <Route path = "/LatestProducts11" element = {<LatestProducts11/>}></Route>
                <Route path = "/FilterBarVertical" element = {<FilterBarVertical/>}></Route>
                <Route path = "/AdminLogin" element = {<AdminLogin/>}></Route>
                <Route path = "/OrderCompleted" element = {<OrderCompleted/>}></Route>

                {/* <Route path = "/Examplecheck" element = {<Examplecheck/>}></Route>
                <Route path = "/ExmReapeatCom11" element = {<ExmReapeatCom11/>}></Route>
                <Route path = "/Landing" element = {<Landing/>}></Route>
                */}
            </Routes>
        </HashRouter>
    </>
};

export default Navigation();


