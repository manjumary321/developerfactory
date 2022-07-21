import "./style1.css";
import logo from "./image/logo.jpg";
import trusted_newicon11 from "./image/trusted_newicon11.jpg";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Signup21() {

    const [dateofbirth, setDateofbirth] = useState('');
    const [denomination, setDenomination] = useState('');
    const [division, setDivision] = useState('');
    const [subcaste, setSubcaste] = useState('');
    const [mother, setMother] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(0)
const navigate=useNavigate();
    useEffect(() => {
        let temp = localStorage.getItem("id")
        setId(temp)
        // alert(temp)
    }, [])    // <- add empty brackets here

    const handleChangeBirth = (e) => {
        console.log(e.target.value)
        setDateofbirth(e.target.value)
    }

    const handleChangeDenomination = (e) => {
        console.log(e.target.value)
        setDenomination(e.target.value)
    }

    const handleChangeDivision = (e) => {
        console.log(e.target.value)
        setDivision(e.target.value)
    }

    const handleChangeSubcaste = (e) => {
        console.log(e.target.value)
        setSubcaste(e.target.value)
    }

    const handleChangeMothertongue = (e) => {
        console.log(e.target.value)
        setMother(e.target.value)
    }

    const handleChangeEmail = (e) => {
        console.log(e.target.value)
        setGmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

  

    const handleClick6 = (e) => {
        e.preventDefault();

        const url = "http://localhost:8000/Signup21";
        // const request = {username:"bina",password:"rte"};
        const request = {
            dateofmonth: dateofbirth,
            religion: denomination,
            caste: division,
            subcaste: subcaste,
            mothertoungue: mother,
            gmail: gmail,
            password: password,
            id: id,
        };
        const header = {};

        axios.post(url, request, header)
            .then((response) => {
                // if(response.data.length>0){
                //     alert("succes")
                //    console.log(JSON.stringify(response.data.length))
                if (response.data.length !== 0) {
                    console.log("successfull")
                    alert("successfull")
                    navigate('/ProflieList1');
                }
                else {
                    alert("errorsuccessfull");
                }
            })




    }
    //   const handleClick=(e)=>{
    //     alert("denomination"+ denomination);
    //     navigate('/Register');
    //   }

    return (
        <div className="outer">
            <div className="homebanner">
                <div className="homebannerrow1">
                    <div>
                        <img src={logo}  alt=""></img>
                    </div>
                    <div className="homelabrow2">
                        <label className="homelab1">ChristianMatrimony.com</label>
                        <label className="homelab2">From Matrimony.com Group</label>
                    </div>
                </div>
                <div className="homebannerrow3">
                    {/* <label>Already a member?</label>
                        <button>Login</button> */}
                </div>
            </div>
            <div className="signuprow2">
                <div className="signupcontainer">
                    <div className="signupcontainerrow1">
                        <label className="Great">Great!,You have completed</label>
                        <label className="two">20%</label>
                    </div>
                    <div className="signupcontainerrow2">
                        <div className="signupcontainercolumn1">
                            <img src={trusted_newicon11}  alt=""></img>
                            <label>Trusted by Christians across the world!</label>
                        </div>
                        <div className="signupcontainercolumn2">
                            <div className="please">
                                <label>Please provide us with your basic details</label>
                            </div>
                            <div className="date">
                                <label className="pl1">Date of birth</label>
                                <input onChange={(e) => { handleChangeBirth(e) }} value={dateofbirth} type="text" placeholder=""></input>
                            </div>
                            <div className="denomination">
                                <label className="pl1">Denomination</label>
                                <input onChange={(e) => { handleChangeDenomination(e) }} value={denomination} type="text" placeholder=""></input>
                            </div>
                            <div className="division">
                                <label className="pl1">Division</label>
                                <input onChange={(e) => { handleChangeDivision(e) }} value={division} type="text" placeholder=""></input>
                            </div>
                            <div className="Subcaste">
                                <label classNameName="pl1">Subcaste (optional)</label>
                                <input onChange={(e) => { handleChangeSubcaste(e) }} value={subcaste} type="text" placeholder=""></input>
                            </div>
                            <div className="mother">
                                <label className="pl1">Mother tongue</label>
                                <input onChange={(e) => { handleChangeMothertongue(e) }} value={mother} type="text" placeholder=""></input>
                            </div>
                            <div className="email">
                                <label className="pl1">Email id</label>
                                <input onChange={(e) => { handleChangeEmail(e) }} value={gmail} type="text" placeholder=""></input>
                            </div>
                            <div className="pass">
                                <label className="pl1">Password</label>
                                <input onChange={(e) => { handleChangePassword(e) }} value={password} type="password" placeholder=""></input>
                            </div>
                            <div className="continue">
                                <button onClick={(e) => handleClick6(e)} >Continue</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="signuprow2">
                <label className="copyright">Copyright © 2022. All rights reserved.</label>
            </div>
        </div>

    )
};
export default Signup21;