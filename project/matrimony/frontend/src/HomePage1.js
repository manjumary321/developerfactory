import "./style1.css";
import logo from "./image/logo.jpg";
import bg from "./image/bg.webp";
import trusted from './image/trustedhome_icon1.jpg';
import ring from './image/ring_icon2.jpg';
import denomination from './image/denominationshome_icon3.jpg';
import genuinehome from './image/genuinehome_icon4.jpg';
import location from './image/location_icon5.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function HomePage1() {

  const [show, setShow] = useState(false)   //modal show
  const navigate = useNavigate();  //navigate

  const [profilefor, setProfilefor] = useState('');  //resigter
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [id, setId] = useState(0)

  // const [matrimony, setMatrimony] = useState('');  //login
  // const [password, setPassword] = useState('');


  const handleChange4 = (e) => {     //resigter
    console.log(e.target.value)
    setProfilefor(e.target.value)
  }
  const handleChange2 = (e) => {    //resigter
    console.log(e.target.value)
    setName(e.target.value)
  }
  const handleChange3 = (e) => {     //resigter
    console.log(e.target.value)
    setNumber(e.target.value)
  }

  const handleClick1 = (e) => {             //open model
    // localStorage.setItem()
    // navigate('/Login')
    setShow(true)
  }

  // const handleMatrimonyChange = (e) => {     //login
  //   console.log(e.target.value)
  //   setMatrimony(e.target.value)
  // }
  // const handlePasswordChange = (e) => {     //login
  //   console.log(e.target.value)
  //   setPassword(e.target.value)
  // }

  // const handleCheckedChange = (e) => {          //login
  //   console.log('The checkbox was toggled');
  // }


  

  // const handleClick3 = (e) => {             //axios login
  //   e.preventDefault();

  //   const url = "http://localhost:8000/Login";
  //   // const request = {username:"bina",password:"rte"};
  //   const request = { username: matrimony, password: password };
  //   const header = {};

  //   axios.post(url, request, header)

  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         //alert("succes")
  //         console.log(JSON.stringify(response.data.length))
  //         navigate('/ProflieList1');
  //       }
  //       else {
  //         alert("error : username");
  //       }
  //     })

  //     .carry((error) => {
  //       console.log(error)
  //     })
  // }


  const handleClick2 = (e) => {          // axios resigter 
    e.preventDefault();

    // const url = "http://localhost:8000/HomePage1";//
    const url="https://0vza9dda7f.execute-api.us-west-2.amazonaws.com/Register";
    const request = '{ "profilefor": "'+profilefor+'","username": "'+name+'", "mobile":"'+ number+'" }';
    const header = {};

    axios.post(url, request, header)

          .then((response) => {
               if (response.data.length !== 0) {
                // alert("name=>" + name+"  number=>" + number);
                  console.log(JSON.stringify(response.data.length))
                  alert(JSON.stringify(response.data))
                  localStorage.setItem("id", response.data.insertId);
                  alert("Registered")
                  navigate('/Signup21');
              }
               else {
                    alert("error register");
              }
      })

      // .then((response)=>{
      //   // console.log(JSON.Stringify(response.data));
      //   alert(JSON.stringify(response.data))
      //       navigate2('/Signup21');


      // });

      .carry((error) => {
        console.log(error)
      })
  }


  // const navigate1=useNavigate();
  // const handleClick2=(e)=>{
  //   navigate1('/Signup21')
  // }


  return (
    <>   <Modal show={show} setShow={setShow} />
      <div className="outer">

        <div className="homebanner">
          <div className="homebannerrow1">
            <div>
              <img src={logo} alt=""></img>
            </div>
            <div className="homelabrow2">
              <label className="homelab1">ChristianMatrimony.com</label>
              <label className="homelab2">From Matrimony.com Group</label>
            </div>
          </div>
          <div className="homebannerrow3">
            <label>Already a member?</label>
            <button onClick={(e) => handleClick1(e)}>Login</button>
          </div>
        </div>
        <div className="secondouter">
          <div className="homerow2" style={{ backgroundImage: `url(${bg})` }}>
            <div className="homecontainer">
              <div className="homeinnercontainer">
                <div className="homeinnercontainerrow1">
                  <h1>
                    No. 1 and official matrimony service exclusively for Christians
                  </h1>
                  <h2>Meet your Christian soulmate here!</h2>
                </div>
                <div className="homeinnercontainerrow2">
                  <div className="matri">
                    <label>Matrimony Profile For</label>
                    <select value={profilefor} onChange={(e) => { handleChange4(e) }}>
                      <option >Select</option>
                      <option value="self">Self</option>
                      <option value="Relative">Relative</option>
                      <option value="Friend">Friend</option>
                    </select>
                  </div>
                  <div className="name">
                    <label>Name</label>
                    <input onChange={(e) => { handleChange2(e) }} value={name} type="text" placeholder="Name"></input>
                  </div>
                  <div className="mobile">
                    <label>Mobile Number</label>
                    <input onChange={(e) => { handleChange3(e) }} value={number} type="number" placeholder="Mobile Number"></input>
                  </div>
                  <button className="register" onClick={(e) => handleClick2(e)} >Register Free</button>
                </div>
                <div className="homeinnercontainerrow3">
                  <label>By clicking on Register Free, you agree to</label>
                  <label className="bluetext">Terms & Conditions </label>
                  <label> and</label>
                  <label className="bluetext"> Privacy Policy</label>
                </div>
              </div>
            </div>
          </div>

          <div className="homerow3">
            <div className="homeinnerrow3">
              <div className="homerow3col1">
                <img src={trusted} alt=""></img>
                <label>10+ years of service in helping Christians cherish the meaning of Happy marriage</label>
              </div>
              <div className="homerow3col2">
                <img src={ring} alt=""></img>
                <label>2 Lakh+ people have found their life partner using our services</label>
              </div>
              <div className="homerow3col3">
                <img src={denomination} alt=""></img>
                <label>2020's winner of 'India's Growth Champions Award' by The Economic Times</label>
              </div>
              <div className="homerow3col4">
                <img src={genuinehome} alt=""></img>
                <label>1 Lakh+ genuine profiles with 100% verified phone numbers</label>
              </div>
              <div className="homerow3col5">
                <img src={location} alt=""></img>
                <label>130+ branches across India to serve you better</label>
              </div>

            </div>

          </div>
        </div>
      </div></>
  );
}

function Modal({ show, setShow }) {


  const navigate = useNavigate();
  const [matrimony, setMatrimony] = useState('');  //login
  const [password, setPassword] = useState('');


  const handleMatrimonyChange = (e) => {     //login
    console.log(e.target.value)
    setMatrimony(e.target.value)
  }
  const handlePasswordChange = (e) => {     //login
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const handleCheckedChange = (e) => {          //login
    console.log('The checkbox was toggled');
  }

  const handleClick3 = (e) => {             //axios login
    e.preventDefault();

    // const url = "http://localhost:8000/Login";
const url="https://39ckr5heye.execute-api.us-west-2.amazonaws.com/newlogin"
    // const request = {username:"bina",password:"rte"};
    const request ='{ "username":"'+matrimony+'", "password": "'+password+'" }';
    const header = {};

    axios.post(url, request, header)

        .then((response) => {
            if (response.data.length > 0) {
              console.log(JSON.stringify(response.data.length))
              navigate('/ProflieList1');
          }
          else {
             alert("Incorrect username or password");
              }
        })

        .carry((error) => {
          console.log(error)
        })
      }


  return (<div className={show ? "modal" : "hidden"}>
    <div className="modalinner">
      <div className="logincontainter">
        <div className="loginheader">
          <label>Login</label>
          <button onClick={(e) => { setShow(false) }}>X</button>
        </div>
        <div className="loginbody">
          <div className="logininnerbody">
            <label className="loginlabel">Matrimony Id/Mobile No./E-mail</label>
            <input className="logininput" onChange={(e) => { handleMatrimonyChange(e) }} value={matrimony} type="text" placeholder='MatrimonyID'></input>
            <label className="loginlabel">Password</label>
            <input className="logininput" onChange={(e) => { handlePasswordChange(e) }} value={password} type="text" placeholder='Password'></input>
          </div>
          <div className="logincheck">
            <input onChange={(e) => { handleCheckedChange(e) }} type="checkbox" placeholder=''></input>
            <label>Keep me logged in</label>
          </div>
          <div className="loginbutton">

            <button onClick={(e) => handleClick3(e)}> LOGIN</button>

          </div>
          <div className="loginforget">
            <label>Forgot Password? </label>
            <label > | </label>
            <label> Login Via OTP</label>
          </div>

        </div>
        <div className="loginfooter">

        </div>
      </div>
    </div>
  </div>)
}
export default HomePage1;
