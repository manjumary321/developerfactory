import './Homepage.css'
import logo from './images/logo.jpg';
import trusted from './images/trustedhome_icon1.jpg';
import ring from './images/ring_icon2.jpg';
import denomination from './images/denominationshome_icon3.jpg';
import genuinehome from './images/genuinehome_icon4.jpg';
import location from './images/location_icon5.jpg';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
function HomePage() {
  const navigate=useNavigate();
  const handleClick1=(e)=>{
    navigate('/Login')
  }

    const [name,setName]= useState('');
    const [number,setNumber] = useState('');

      const handleChange2=(e)=>{
      console.log(e.target.value)
      setName(e.target.value)
  }
    const handleChange3=(e)=>{
    console.log(e.target.value)
    setNumber(e.target.value)
    }

    const handleClick2=(e)=>{
      alert("name=>" + name+"  number=>" + number);
      navigate('/Register');
  }
  //   const handleclick2=(e)=>{
  //   navigate('/Register')

  // }
  return (
    <div class="imagebackground">
      <div class=" row1">
        <div class="row1col1">
          <img src={logo} ></img>
          
          {/* <img src="logo.jpg" alt="Girl in a jacket" style={{width:"150px" height:"100px"}} /> */}
        </div>  
        <div class="row1col2">
          <label>ChristianMatrimony.com</label>
          <label>From Matrimony.com Group</label>
        </div>
        <div class="row1col3">
          <label>Already a member?</label>
          {/* <button onClick={()handleclick()=>{}}>Login</button> */}
          <button onClick={(e)=>handleClick1(e)}>Login</button>
        </div>
      </div>
      <div class=" row2">
        <div class="innercontainer">
          <div class="row2col1">
            <h1>No. 1 and official matrimony service exclusively for Christians</h1>
          </div>
          <div class="row2col2">
            <h2>Meet your Christian soulmate here!</h2>
          </div>
          <div class="row2col3">
            <div class="matri">
              <label>Matrimony Profile For</label>
              <select>
                <option>Select</option>
                <option>Self</option>
                <option>Relative</option>
                <option>Friend</option>
              </select>
            </div>
            <div class="name">
              <label>Name</label>
              <input onChange={(e)=>{handleChange2(e)}} value={name} type="text" placeholder='Name'></input>
            </div>
            <div class="mobile">
              <label>Mobile Number</label>
              <input onChange={(e)=>{handleChange3(e)}} value={number} type="number" placeholder='Mobile Number'></input>
            </div>
            <div class="register">
              <button onClick={(e)=>handleClick2(e)}>Register Free</button>
            </div>

          </div>
          <div class="row2col4">
            <label>By clicking on Register Free, you agree to</label>
            <label class="bluetext">Terms & Conditions</label>
            <label>and</label>
            <label class="bluetext">Privacy Policy</label>
          </div>

        </div>
      </div>
      <div class=" row3">
        <div class="innerrow3">
            <div class="row3col1">
                {/* <div> */}
                     <img src={trusted}></img>
                {/* </div>
                <div> */}
                     <label>10+ years of service in helping Christians cherish the meaning of Happy marriage</label>
                </div>
            <div class="row3col2">
                <img src={ring}></img>
                <label>2 Lakh+ people have found their life partner using our services</label>
            </div>
            <div class="row3col3">
                 <img src={denomination}></img>
                 <label>2020's winner of 'India's Growth Champions Award' by The Economic Times</label>
            </div>
            <div class="row3col4">
                <img src={genuinehome}></img>
                <label>1 Lakh+ genuine profiles with 100% verified phone numbers</label>
            </div>
            <div class="row3col5">
                 <img src={location}></img>
                 <label>130+ branches across India to serve you better</label>
            </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;