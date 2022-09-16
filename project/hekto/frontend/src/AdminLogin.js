import "./AdminLogin.css";
import AdminLogin_mail from './Images/AdminLogin_mail.jpg'
import AdminLogin_hand12 from './Images/AdminLogin_hand12.png'
import {AiOutlineEye} from "react-icons/ai";

function AdminLogin(){
    return(
        <>
        <div className="AdminLogin_outer">
            <div className="AdminLogin_container">
                <div className="AdminLogin_inner_container">
                    <div className="AdminLogin_inncont_row1">
                        <img src={AdminLogin_mail}></img>
                        <label>Logo</label>
                    </div>
                    <div className="AdminLogin_inncont_row2">
                        <label>Welcome!</label>
                        <img src={AdminLogin_hand12}></img>
                    </div>
                    <div className="AdminLogin_inncont_row3">
                       <label>Please sign-in to your account</label> 
                    </div>
                    <div className="AdminLogin_inncont_row4">
                        <input type="Name" placeholder="Email"></input>
                    </div>
                    <div className="AdminLogin_inncont_row5">
                        <input type="Password" placeholder="Password"/>
                        <AiOutlineEye/>
                        
                    </div>
                    <div className="AdminLogin_inncont_row6">
                        <div className="AdminLogin_inncont_check_row1_col1">
                            <input type="checkbox" ></input>
                            <label>Remember me</label>
                        </div>
                        <div  className="AdminLogin_inncont_check_row1_col2">
                            <label>
                                <span>Forget Password?</span>
                            </label>
                        </div>
                    </div>
                    <div className="AdminLogin_inncont_row7">
                        <button>LOGIN</button>
                    </div>
                </div>


            </div>

        </div>
        
        </>
    )
}
export default AdminLogin;