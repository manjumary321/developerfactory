import HomePage from "./HomePage";
import Signup from "./Signup";
import Signup2 from "./Signup2";
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import {BrowserRouter,Route,Routes} from "react-router-dom";


function Navigation(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<HomePage/>}></Route>
                    <Route path = "/Login" element = {<Signup/>}></Route>
                    <Route path = "/Register" element = {<Signup2/>}></Route>
                    <Route path = "/Profile" element = {<Profile/>}></Route>
                    <Route path = "/Profilelist" element = {<ProfileList/>}></Route>

                   
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navigation;