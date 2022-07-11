import HomePage1 from './HomePage1';
import Login1 from './Login1';
import Signup21 from './Signup21';
import ProflieList1 from './ProflieList1';
import Proflie1 from './Proflie1';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function Navigation(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<HomePage1/>}></Route>
                    <Route path = "/Login" element = {<Login1/>}></Route>
                    <Route path = "/Signup21" element = {<Signup21/>}></Route>
                    <Route path = "/ProflieList1" element = {<ProflieList1/>}></Route>
                    <Route path = "/Proflie1" element = {<Proflie1/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};
export default Navigation;
