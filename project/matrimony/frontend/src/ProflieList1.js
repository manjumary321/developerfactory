import "./style1.css";
import logo from "./image/logo.jpg";
import userpic from "./image/userpic.jpg";
import imageprofile from './image/ezgif.com-gif-maker.jpg';
import { useNavigate } from 'react-router-dom';

function ProflieList1(){
      
    const navigate5=useNavigate();
    const handleClick5=(e)=>{
      navigate5('/Proflie1')
    }

    return(
        <div class="outer">
            <div class="ProflieListrow1">
                <div class="menu">
                    <div class ="pic">
                        <img src={logo} ></img>
                    </div>
                    <div class ="menuul">
                            <ul>
                                <li>MY HOME</li>
                                <li>SEARCH</li>
                                <li>MATCHES</li>
                                <li>MAILBOX</li>
                                <li>UPGRADE NOW</li>
                            </ul>
                    </div>
                    <div class="userpic">
                            <img scr={userpic}></img>
                            <div class="logout">
                                <label>Logout</label>
                            </div>
                    </div>
                </div>
                <div class="search">
                        <div class="searchtext">
                            <input text='text' placeholder=''></input>
                        </div>
                        <div class="searchbutton">
                            <button>SEARCH</button>
                        </div>
                </div>
            </div>
            <div onClick={(e)=>handleClick5(e)} class="ProflieListrow2">
                <div class="proflielist">
                    <div class="proflielistrow2column1">
                        <img src={imageprofile}></img>
                    </div>
                    <div class="proflielistrow2column2">
                        <div class="pro1"><h2>WTTR**</h2></div>
                            <div class="pro2">
                                <div class="lab"><label>26 Years,5'5"</label></div>
                                <div class="lab2"><label >BHMS</label></div>
                            </div>
                            <div class="pro3">
                                <div class="lab"><label >Mumbai</label></div>
                                <div class="lab2"><label >Doctor</label></div>
                            </div>
                            <div class="pro4">
                                <div class="lab"><label >Hindu,Brahmin</label></div>
                                <div class="lab2"><label >$ 0 - 1 Lakh</label></div>
                            </div>
                            <div class="pro5">
                                <div class="lab"><label >Bhumihar</label></div>
                                <div class="lab2"><label >-</label></div>
                            </div>
                            <div class="pro6">
                                <div class="lab"><label >Hindi-UP/UK</label></div>
                                <div class="lab2"><label >Never Married</label></div>
                            </div>
                    </div>
                </div>   
            </div>


        </div>
    )
}
export default ProflieList1;
