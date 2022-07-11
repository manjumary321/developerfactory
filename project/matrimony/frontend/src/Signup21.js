import "./style1.css";
import logo from "./image/logo.jpg";
import trusted_newicon11 from "./image/trusted_newicon11.jpg";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
function Signup21(){

    const[dateofbirth,setDateofbirth]= useState('');
  const[denomination,setDenomination]=useState('');
  const[division,setDivision]= useState('');
  const[subcaste,setSubcaste]=useState('');
  const[mother,setMother]= useState('');
  const[gmail,setGmail]=useState('');
  const[password,setPassword]= useState('');
 

  const handleChangeBirth=(e)=>{
    console.log(e.target.value)
    setDateofbirth(e.target.value)
  }

  const handleChangeDenomination=(e)=>{
    console.log(e.target.value)
    setDenomination(e.target.value)
  }

  const handleChangeDivision=(e)=>{
    console.log(e.target.value)
    setDivision(e.target.value)
  }

  const handleChangeSubcaste=(e)=>{
    console.log(e.target.value)
    setSubcaste(e.target.value)
  }

  const handleChangeMothertongue=(e)=>{
    console.log(e.target.value)
    setMother(e.target.value)
  }

  const handleChangeEmail=(e)=>{
    console.log(e.target.value)
    setGmail(e.target.value)
  }
  
  const handleChangePassword=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const navigate=useNavigate();
  
  
  const handleClick6=(e)=>{
  navigate('/');
  }
//   const handleClick=(e)=>{
//     alert("denomination"+ denomination);
//     navigate('/Register');
//   }

    return(
        <div class="outer">
            <div class="homebanner">
                <div class="homebannerrow1">
                    <div>
                        <img src={logo}></img>
                    </div>
                     <div class="homelabrow2">
                        <label class="homelab1">ChristianMatrimony.com</label>
                        <label class="homelab2">From Matrimony.com Group</label>
                    </div>
                </div>
                <div class="homebannerrow3">
                     {/* <label>Already a member?</label>
                        <button>Login</button> */}
                </div>
            </div>
            <div class="signuprow2">
                <div class="signupcontainer">
                    <div class="signupcontainerrow1">
                         <label class="Great">Great!,You have completed</label>
                         <label class="two">20%</label>
                    </div>
                    <div class="signupcontainerrow2">
                        <div class="signupcontainercolumn1">
                                <img src={trusted_newicon11}></img>
                                <label>Trusted by Christians across the world!</label>
                        </div>
                        <div class="signupcontainercolumn2">
                            <div class="please">
                                <label>Please provide us with your basic details</label>
                            </div>
                            <div class="date">
                                <label class="pl1">Date of birth</label>
                                <input onChange={(e)=>{handleChangeBirth(e)}} value={dateofbirth} type="text" placeholder=""></input>
                            </div>
                            <div class="denomination">
                                <label class="pl1">Denomination</label>
                                <input onChange={(e)=>{handleChangeDenomination(e)}} value={denomination} type="text" placeholder=""></input>
                            </div>
                            <div class="division">
                                <label class="pl1">Division</label>
                                <input onChange={(e)=>{handleChangeDivision(e)}} value={division} type="text" placeholder=""></input>
                            </div>
                            <div class="Subcaste">
                                <label class="pl1">Subcaste (optional)</label>
                                <input onChange={(e)=>{handleChangeSubcaste(e)}} value={subcaste} type="text" placeholder=""></input>
                            </div>
                            <div class="mother">
                                <label class="pl1">Mother tongue</label>
                                <input onChange={(e)=>{handleChangeMothertongue(e)}} value={mother} type="text" placeholder=""></input>
                            </div>
                            <div class="email">
                                <label class="pl1">Email id</label>
                                <input onChange={(e)=>{handleChangeEmail(e)}} value={gmail} type="text" placeholder=""></input>
                            </div>
                            <div class="pass">
                                <label class="pl1">Password</label>
                                <input onChange={(e)=>{handleChangePassword(e)}} value={password} type="password" placeholder=""></input>
                            </div>
                            <div class="continue">
                                <button onClick={(e)=>handleClick6(e)} >Continue</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div class="signuprow2">
                     <label class="copyright">Copyright © 2022. All rights reserved.</label>
            </div>
        </div>

    )
};
export default Signup21;