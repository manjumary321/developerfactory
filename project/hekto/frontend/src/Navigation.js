// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route }

import  { HashRouter, Routes, Route } from "react-router-dom";

import InBetweenBanner1 from './InBetweenBanner1';
import LatestProducts from './LatestProducts.js';
import LatestProducts11 from './LatestProducts11.js';

import FilterBarVertical from './FilterBarVertical.js';
import AdminLogin from './AdminLogin.js';
import OrderCompleted from './OrderCompleted';
import Rating from './Rating.js';
import AdminFAQ from './AdminFAQ.js';
import AdminFilterSelection from './AdminFilterSelection.js';
import AdminSingleSummary from './AdminSingleSummary.js';
import AdminUserProfile from'./AdminUserProfile.js';
import AdminTitle from './AdminTitle';
import AdminVideo from './AdminVideo.js';
import AdminImages from './AdminImages.js';
import AdminFilterSlider from './AdminFilterSlider.js';



// import Examplecheck from './Examplecheck.js';
import ExmReapeatCom11 from './ExmReapeatCom11.js';
// import Landing from '../src/pages/landing.js';
import ExCheckbox from './ExCheckbox.js';
// import CheckBox from './CheckBox.js';


function Navigation() {
    return <>
        <HashRouter>
            <Routes>
                <Route path = "/" element = {<InBetweenBanner1/>}></Route>
                <Route path = "/LatestProducts" element = {<LatestProducts/>}></Route>
                <Route path = "/LatestProducts11" element = {<LatestProducts11/>}></Route>
              
                <Route path = "/FilterBarVertical" element = {<FilterBarVertical/>}></Route>
                <Route path = "/AdminLogin" element = {<AdminLogin/>}></Route>
                <Route path = "/OrderCompleted" element = {<OrderCompleted/>}></Route>
                <Route path = "/Rating" element = {<Rating/>}></Route>
                <Route path = "/AdminFAQ" element = {<AdminFAQ/>}></Route>
                <Route path = "/AdminFilterSelection" element = {<AdminFilterSelection/>}></Route>
                <Route path = "/AdminSingleSummary" element = {<AdminSingleSummary/>}></Route>
                <Route path = "/AdminUserProfile" element = {<AdminUserProfile/>}></Route>
                <Route path = "/AdminTitle" element = {<AdminTitle/>}></Route>
                <Route path = "/AdminVideo" element = {<AdminVideo/>}></Route>
                <Route path = "/AdminImages" element = {<AdminImages/>}></Route>
                <Route path = "/AdminFilterSlider" element = {<AdminFilterSlider/>}></Route>
                

                
                {/* <Route path = "/Examplecheck" element = {<Examplecheck/>}></Route> */}
                <Route path = "/ExmReapeatCom11" element = {<ExmReapeatCom11/>}></Route>
                {/* <Route path = "/Landing" element = {<Landing/>}></Route> */}
                <Route path = "/ExCheckbox" element = {<ExCheckbox/>}></Route>
                {/* <Route path = "/CheckBox" element = {<CheckBox/>}></Route> */}
               
               
            </Routes>
        </HashRouter>
    </>
};

export default Navigation;


