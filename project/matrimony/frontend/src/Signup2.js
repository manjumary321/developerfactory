import "./Signup2.css";
import logo from "./images/logo.jpg";
import trusted_newicon11 from "./images/trusted_newicon11.jpg";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function Signup2() {

  const[dateofbirth,setDateofbirth]= useState('');
  const[denomination,setDenomination]=useState('');
  const[division,setDivision]= useState('');
  const[subcaste,setSubcaste]=useState('');
  const[mother,setMother]= useState('');
  const[gmail,setGmail]=useState('');
  const[password,setPassword]= useState('');
 

  const handleChange1=(e)=>{
    console.log(e.target.value)
    setDateofbirth(e.target.value)
  }

  const handleChange2=(e)=>{
    console.log(e.target.value)
    setDenomination(e.target.value)
  }

  const handleChange3=(e)=>{
    console.log(e.target.value)
    setDivision(e.target.value)
  }

  const handleChange4=(e)=>{
    console.log(e.target.value)
    setSubcaste(e.target.value)
  }

  const handleChange5=(e)=>{
    console.log(e.target.value)
    setMother(e.target.value)
  }

  const handleChange6=(e)=>{
    console.log(e.target.value)
    setGmail(e.target.value)
  }
  
  const handleChange7=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const navigate=useNavigate();
  const handleclick=(e)=>{
    navigate('/')
  }

  const handleClick=(e)=>{
    alert("denomination"+ denomination);
    navigate('/Register');
  }


  return (
    <div class="outer">
      <div class=" row1">
        <div class="row1col1">
          <img src={logo}></img>
        </div>
        <div class="row1col2">
          <label>ChristianMatrimony.com</label>
          <label>From Matrimony.com Group</label>
        </div>
      </div>
      <div class=" row2">
        <div class="great">
          <label >Great!,You have completed</label>
          <label  >20%</label>
        </div>
      
      <div class="form">
        <div class="form_col1">
          <img src={trusted_newicon11}></img>
          <label>Trusted by Christians across the world!</label>
        </div>
        <div class="form_col2">
          <div class="please">
            <label>Please provide us with your basic details</label>
          </div>
          <div class="date">
            <label class="pl1">Date of birth</label>
            <input onChange={(e)=>{handleChange1(e)}} value={dateofbirth} type="date" placeholder=""></input>
          </div>
          <div class="denomination">
            <label class="pl1">Denomination</label>
            <input onChange={(e)=>{handleChange2(e)}} value={denomination} type="text" placeholder=""></input>
          </div>
          <div class="division">
            <label class="pl1">Division</label>
            <input onChange={(e)=>{handleChange3(e)}} value={division} type="text" placeholder=""></input>
          </div>
          <div class="Subcaste">
            <label class="pl1">Subcaste (optional)</label>
            <input onChange={(e)=>{handleChange4(e)}} value={subcaste}type="text" placeholder=""></input>
          </div>
          <div class="mother">
            <label class="pl1">Mother tongue</label>
            <input onChange={(e)=>{handleChange5(e)}} value={mother} type="text" placeholder=""></input>
          </div>
          <div class="email">
            <label class="pl1">Email id</label>
            <input onChange={(e)=>{handleChange6(e)}} value={gmail} type="text" placeholder=""></input>
          </div>
          <div class="pass">
            <label class="pl1">Password</label>
            <input onChange={(e)=>{handleChange7(e)}} value={password} type="password" placeholder=""></input>
          </div>
          <div class="continue">
            <button onClick={(e)=>handleclick(e)}>Continue</button>
          </div>
        </div>
        </div>
      </div>
      <div class=" row3">
        <label class="copyright">Copyright © 2022. All rights reserved.</label>
      </div>
    </div>
  );
}
export default Signup2;
