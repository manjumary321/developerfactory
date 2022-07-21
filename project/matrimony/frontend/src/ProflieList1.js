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
        <div className="outer">
            <div className="ProflieListrow1">
                <div className="menu">
                    <div className ="pic">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className ="menuul">
                            <ul>
                                <li>MY HOME</li>
                                <li>SEARCH</li>
                                <li>MATCHES</li>
                                <li>MAILBOX</li>
                                <li>UPGRADE NOW</li>
                            </ul>
                    </div>
                    <div className="userpic">
                            <img scr={userpic} alt=""></img>
                            <div className="logout">
                                <label>Logout</label>
                            </div>
                    </div>
                </div>
                <div className="search">
                        <div className="searchtext">
                            <input text='text' placeholder=''></input>
                        </div>
                        <div className="searchbutton">
                            <button>SEARCH</button>
                        </div>
                </div>
            </div>
            <div onClick={(e)=>handleClick5(e)} className="ProflieListrow2">
                <div className="proflielist">
                    <div className="proflielistrow2column1">
                        <img src={imageprofile} alt=""></img>
                    </div>
                    <div className="proflielistrow2column2">
                        <div className="pro1"><h2>WTTR**</h2></div>
                            <div className="pro2">
                                <div className="lab"><label>26 Years,5'5"</label></div>
                                <div className="lab2"><label >BHMS</label></div>
                            </div>
                            <div className="pro3">
                                <div className="lab"><label >Mumbai</label></div>
                                <div className="lab2"><label >Doctor</label></div>
                            </div>
                            <div className="pro4">
                                <div className="lab"><label >Hindu,Brahmin</label></div>
                                <div className="lab2"><label >$ 0 - 1 Lakh</label></div>
                            </div>
                            <div className="pro5">
                                <div className="lab"><label >Bhumihar</label></div>
                                <div className="lab2"><label >-</label></div>
                            </div>
                            <div className="pro6">
                                <div className="lab"><label >Hindi-UP/UK</label></div>
                                <div className="lab2"><label >Never Married</label></div>
                            </div>
                    </div>
                </div>   
            </div>
            <div  className="ProflieListrow2">
            {/* <div onClick={(e)=>handleClick5(e)} className="ProflieListrow2"> */}
                <div className="proflielist">
                    <div className="proflielistrow2column1">
                        <img src={imageprofile} alt=""></img>
                    </div>
                    <div className="proflielistrow2column2">
                        <div className="pro1"><h2>WTTR**</h2></div>
                            <div className="pro2">
                                <div className="lab"><label>26 Years,5'5"</label></div>
                                <div className="lab2"><label >BHMS</label></div>
                            </div>
                            <div className="pro3">
                                <div className="lab"><label >Mumbai</label></div>
                                <div className="lab2"><label >Doctor</label></div>
                            </div>
                            <div className="pro4">
                                <div className="lab"><label >Hindu,Brahmin</label></div>
                                <div className="lab2"><label >$ 0 - 1 Lakh</label></div>
                            </div>
                            <div className="pro5">
                                <div className="lab"><label >Bhumihar</label></div>
                                <div className="lab2"><label >-</label></div>
                            </div>
                            <div className="pro6">
                                <div className="lab"><label >Hindi-UP/UK</label></div>
                                <div className="lab2"><label >Never Married</label></div>
                            </div>
                    </div>
                </div>   
            </div>



        </div>
    )
}
export default ProflieList1;
