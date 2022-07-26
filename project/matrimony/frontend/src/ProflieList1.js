import "./style1.css";
import logo from "./image/logo.jpg";
import userpic from "./image/userpic.jpg";
import imageprofile from './image/ezgif.com-gif-maker.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProflieList1() {

    const navigate = useNavigate();
    const [searchName, setSearch] = useState('');
    const [array, setArrayFunc] = useState([]);

    const handleChangeSearch=(e) => {    //search
        console.log(e.target.value)
        setSearch(e.target.value)
      }

    const handleSearchClick=(e)=>{                  //Axios Search
        e.preventDefault();
        
        const url="https://7bvxd6p2x3.execute-api.us-west-2.amazonaws.com/Search"
        const request='{"username": "'+searchName+'"}';
        const header={}

        axios.post(url, request, header)

             .then((response)=>{
                if (response.data.length !== 0) {
                    console.log(JSON.stringify(response.data.length))
                    console.log("result record")
                    setArrayFunc(response.data)
                    alert("result record")
                    
                }
                else {
                    alert("error result record");
                }
            })
            .catch((error) => {
                console.log(error)
            })
                
             }


    
    
    const handleProflieClick = (e, item) => {
        e.preventDefault();
        localStorage.setItem("id", item.id);
        navigate('/Proflie1')
    }
    useEffect(() => {
        const url = "https://wl1e0tj8zi.execute-api.us-west-2.amazonaws.com/ProflieList"
        const request = {}
        const header = {}

        axios.post(url, request, header)

            .then((response) => {

                if (response.data.length !== 0) {
                    console.log("result record")
                    setArrayFunc(response.data)
                    alert("result record")
                    
                }
                else {
                    alert("error result record");
                }
            })
            .catch((error) => {
                console.log(error)
            })
        // alert(temp)
    }, [])    // <- add empty brackets here



    // const handleClick5=(e)=>{
    //     e.preventDefault();

    //     const url ="https://wl1e0tj8zi.execute-api.us-west-2.amazonaws.com/ProflieList"
    //     const request={}
    //     const header={}


    // }

    return (
        <div className="outer">
            <div className="ProflieListrow1">
                <div className="menu">
                    <div className="pic">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="menuul">
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
                        <input onChange={(e) => {handleChangeSearch(e) }} text={searchName} placeholder=''></input>
                    </div>
                    <div className="searchbutton">
                        <button onClick={(e) => handleSearchClick(e)}>SEARCH</button>
                    </div>
                </div>
            </div>
            {array.map((item, indx) => {
                    return (
            <div className="ProflieListrow2" onClick={(e) => {
                handleProflieClick(e, item);
            }}>
                
                        <div className="proflielist" >


                            <div className="proflielistrow2column1">
                                <img src={imageprofile} alt=""></img>
                            </div>
                            <div className="proflielistrow2column2">
                                <div className="pro1"><h2 >{item.txtUserName}</h2></div>

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
              )
            })}
            <div className="ProflieListrow2">
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
