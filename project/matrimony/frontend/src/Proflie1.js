import "./style1.css";
import logo from "./image/logo.jpg";
import userpic from "./image/userpic.jpg";
import imageprofile from './image/ezgif.com-gif-maker.jpg';
import {useEffect, useState } from 'react';
import axios from "axios";

function Proflie1(){
    const [array,setArrayFunc] = useState([]);
    // const [a,setId]=useState(0);

    useEffect(()=>{
        var a = localStorage.getItem("id");

        const url="https://ijgjkhsk4a.execute-api.us-west-2.amazonaws.com/Proflie"
        const request='{"id":"'+a+'"}'
        const header={}

        axios.post(url,request,header)

        .then((response) =>{ 

            if (response.data.length !== 0) {
                console.log("result record")
                setArrayFunc(response.data)
                alert("result proflie")
                
            }
            else {
                alert("error result proflie");
            }
        })
        .catch((error) => {
            console.log(error)
          })

    },[])    // <- add empty brackets here
    
 
    return(
        <div class="outer">
            <div class="Proflie1row1">
            <div class="menu1">
                    <div class ="pic">
                        <img src={logo} alt=""></img>
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
                    <div class="userpic1">
                            <img scr={userpic} alt=""></img>
                            <div class="logout1">
                                <label>Logout</label>
                            </div>
                    </div>
                </div> 
            </div>
            <div class="Proflie1row2">

                <div class="proflie1namerow1">
                    <div class="proflie1row1column1">
                        <img src={imageprofile} alt=""></img>
                    </div>
                    <div class="proflie1row1column2">
                        <div class="pro1">
                            {array.map((item,indx) => {
                                return(
                            <h2>{item.txtUserName}</h2>
                            )
                          })}
                        </div>
                        <div class="pro2">
                            {array.map((item,indx)=>{
                                return(
                            
                            <label class="created">
                                E5939741 | Profile created by {item.txtProfileFor} | Active - 1 week ago
                            </label>
                                )
                                })}
                        </div>
                        <div class="pro3">
                            <label class="Verified">Verified</label>
                        </div>
                        <div class="menuprofile">
                            <div class="menuprofile1">
                                <ul>
                                    <li>27 years and 9 months, 4'7"</li>
                                    {array.map((item,indx)=>{
                                        return(
                                    <li>Mother Tongue is {item.refMothertoungue}</li>
                                    )
                                    })}
                                    <li>24 Manai Telugu Chettiyar</li>
                                </ul>

                            </div>
                            <div class="menuprofile2">
                                <ul>
                                    <li>Lives in Rangat</li>
                                    <li>Studied in B.A. Degree</li>
                                    <li>Not working</li>
                                </ul>

                            </div>
                        </div>     

                    </div>
                </div>
                <div class="proflie1namerow2">
                    <div>
                        <h2>About Her</h2>
                    </div>
                    <div class ="label1">
                        <label>
                           I belong to a middle class family with moderate values
                        </label>
                    </div>
                    <div class ="label1">
                        <label>27 years and 9 months, 4'7"</label>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Proflie1;