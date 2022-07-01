import './ProfileList.css'
import imageprofile from './images/ezgif.com-gif-maker.jpg';
import logo from './images/logo.jpg';
import userpic from './images/userpic.jpg';
import { useNavigate } from 'react-router-dom';

function ProfileList(){

    const navigate=useNavigate();
    const handleClick=(e)=>{
        navigate('/Profile')
    }
        return(
            <div class="outer">
                <div class="banner">
                    <div class="menu">
                        <div class ="pic">
                            <img src={logo} ></img>
                        </div>
                        <div class ="menuul">
                            <ul>
                                <li>My Home</li>
                                <li>Search</li>
                                <li>Matches</li>
                                <li>Mailbox</li>
                                <li>Upgrade Now</li>
                            </ul>
                        </div>
                        <div class="userpic">
                            <img scr={userpic}></img>
                        </div>

                    </div>
                    <div class="search">
                        <div class="searchtext">
                            <input text='text' placeholder='search'></input>
                        </div>
                        <div class="searchbutton">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <div class="row2">
                    
{/* -----                     */}
                    <div onClick={(e)=>handleClick(e)} class="profile">
                        <div class="rowcolumn1">
                            <img src={imageprofile}></img>
                        </div>
                        <div class="rowcolumn2">
                            <div class="pro1"><h1>WTTR**</h1></div>
                            <div class="pro2">
                                <div><label class="lab">26 Years,5'5"</label></div>
                                <div><label class="lab2">BHMS</label></div>
                            </div>
                            <div class="pro3">
                                <div><label class="lab">Mumbai</label></div>
                                <div><label class="lab2">Doctor</label></div>
                            </div>
                            <div class="pro4">
                                <div><label class="lab">Hindu,Brahmin</label></div>
                                <div><label class="lab2">$ 0 - 1 Lakh</label></div>
                            </div>
                            <div class="pro5">
                                <div><label class="lab">Bhumihar</label></div>
                                <div><label class="lab2">-</label></div>
                            </div>
                            <div class="pro6">
                                <div><label class="lab">Hindi-UP/UK</label></div>
                                <div><label class="lab2">Never Married</label></div>
                            </div>

                        </div>
                    </div>

{/* ----- */}
                    <div class="profile">
                        <div class="rowcolumn1">
                            <img src={imageprofile}></img>
                        </div>
                        <div class="rowcolumn2">
                            <div class="pro1"><h1>WTTR**</h1></div>
                            <div class="pro2">
                                <div><label class="lab">26 Years,5'5"</label></div>
                                <div><label class="lab2">BHMS</label></div>
                            </div>
                            <div class="pro3">
                                <div><label class="lab">Mumbai</label></div>
                                <div><label class="lab2">Doctor</label></div>
                            </div>
                            <div class="pro4">
                                <div><label class="lab">Hindu,Brahmin</label></div>
                                <div><label class="lab2">$ 0 - 1 Lakh</label></div>
                            </div>
                            <div class="pro5">
                                <div><label class="lab">Bhumihar</label></div>
                                <div><label class="lab2">-</label></div>
                            </div>
                            <div class="pro6">
                                <div><label class="lab">Hindi-UP/UK</label></div>
                                <div><label class="lab2">Never Married</label></div>
                            </div>

                        </div>
                    </div>

{/* -----                     */}


               {/* <div class="profile">
                        <div class="rowcolumn1">
                            <img src={imageprofile}></img>
                        </div>
                        <div class="rowcolumn2">
                            <div class="pro1"><h1>WTTR**</h1></div>
                            <div class="pro2">
                                <div><label class="lab">26 Years,5'5"</label></div>
                                <div><label class="lab2">BHMS</label></div>
                            </div>
                            <div class="pro3">
                                <div><label class="lab">Mumbai</label></div>
                                <div><label class="lab2">Doctor</label></div>
                            </div>
                            <div class="pro4">
                                <div><label class="lab">Hindu,Brahmin</label></div>
                                <div><label class="lab2">$ 0 - 1 Lakh</label></div>
                            </div>
                            <div class="pro5">
                                <div><label class="lab">Bhumihar</label></div>
                                <div><label class="lab2">-</label></div>
                            </div>
                            <div class="pro6">
                                <div><label class="lab">Hindi-UP/UK</label></div>
                                <div><label class="lab2">Never Married</label></div>
                            </div>

                        </div>
                    </div>
                    <div class="profile">
                        <div class="rowcolumn1">
                            <img src={imageprofile}></img>
                        </div>
                        <div class="rowcolumn2">
                            <div class="pro1"><h1>WTTR**</h1></div>
                            <div class="pro2">
                                <div><label class="lab">26 Years,5'5"</label></div>
                                <div><label class="lab2">BHMS</label></div>
                            </div>
                            <div class="pro3">
                                <div><label class="lab">Mumbai</label></div>
                                <div><label class="lab2">Doctor</label></div>
                            </div>
                            <div class="pro4">
                                <div><label class="lab">Hindu,Brahmin</label></div>
                                <div><label class="lab2">$ 0 - 1 Lakh</label></div>
                            </div>
                            <div class="pro5">
                                <div><label class="lab">Bhumihar</label></div>
                                <div><label class="lab2">-</label></div>
                            </div>
                            <div class="pro6">
                                <div><label class="lab">Hindi-UP/UK</label></div>
                                <div><label class="lab2">Never Married</label></div>
                            </div>

                        </div>
                    </div> */}

{/* ----- */}
                </div>

            </div>
            
        )

    }     export default ProfileList;