import "./style1.css";
import logo from "./image/logo.jpg";
import bg from "./image/bg.webp";
import trusted from './image/trustedhome_icon1.jpg';
import ring from './image/ring_icon2.jpg';
import denomination from './image/denominationshome_icon3.jpg';
import genuinehome from './image/genuinehome_icon4.jpg';
import location from './image/location_icon5.jpg';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
function HomePage1() {

  const[profilefor,setProfilefor]= useState('');
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
    const handleChange4=(e)=>{
      console.log(e.target.value)
      setProfilefor(e.target.value)
      }


  const navigate=useNavigate();
  const handleClick1=(e)=>{
    // localStorage.setItem()
    navigate('/Login')
  }

  const handleClick2=(e)=>{
    alert("name=>" + name+"  number=>" + number);
    navigate('/Signup21');
}

  // const navigate1=useNavigate();
  // const handleClick2=(e)=>{
  //   navigate1('/Signup21')
  // }

  
  return (
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
          <label>Already a member?</label>
          <button onClick={(e)=>handleClick1(e)}>Login</button>
        </div>
      </div>

      <div class="homerow2" style={{ backgroundImage: `url(${bg})` }}>
        <div class="homecontainer">
          <div class="homeinnercontainer">
            <div class="homeinnercontainerrow1">
              <h1>
                No. 1 and official matrimony service exclusively for Christians
              </h1>
              <h2>Meet your Christian soulmate here!</h2>
            </div>
            <div class="homeinnercontainerrow2">
              <div class="matri">
                <label>Matrimony Profile For</label>
                <select value={profilefor} onChange={(e)=>{handleChange4(e)}}>
                  <option >Select</option>
                  <option value="self">Self</option>
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>
                </select>
              </div>
              <div class="name">
                <label>Name</label>
                <input onChange={(e)=>{handleChange2(e)}} value={name} type="text" placeholder="Name"></input>
              </div>
              <div class="mobile">
                <label>Mobile Number</label>
                <input onChange={(e)=>{handleChange3(e)}} value={number} type="number" placeholder="Mobile Number"></input>
              </div>
              <div onClick={(e)=>handleClick2(e)} class="register">
                <button >Register Free</button>
              </div>
            </div>
            <div class="homeinnercontainerrow3">
              <label>By clicking on Register Free, you agree to</label>
              <label class="bluetext">Terms & Conditions </label>
              <label> and</label>
              <label class="bluetext"> Privacy Policy</label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="homerow3">
        <div class="homeinnerrow3">
            <div class="homerow3col1">
                <img src={trusted}></img>
                <label>10+ years of service in helping Christians cherish the meaning of Happy marriage</label>
            </div>
            <div class="homerow3col2">
                <img src={ring}></img>
                <label>2 Lakh+ people have found their life partner using our services</label>
            </div>
            <div class="homerow3col3">
                 <img src={denomination}></img>
                 <label>2020's winner of 'India's Growth Champions Award' by The Economic Times</label>
            </div>
            <div class="homerow3col4">
                <img src={genuinehome}></img>
                <label>1 Lakh+ genuine profiles with 100% verified phone numbers</label>
            </div>
            <div class="homerow3col5">
                 <img src={location}></img>
                 <label>130+ branches across India to serve you better</label>
            </div>

        </div>

      </div>

    </div>
  );
}
export default HomePage1;
