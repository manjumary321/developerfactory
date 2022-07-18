import "./style1.css";
import { AiOutlineClose , AiFillBehanceCircle,AiFillBackward} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
function Login1(){

    const [matrimony,setMatrimony]= useState('');
    const [password,setPassword] = useState('');

        const handleMatrimonyChange=(e)=>{
        console.log(e.target.value)
        setMatrimony(e.target.value)
    }
        const handlePasswordChange=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    
    const handleCheckedChange=(e)=>{
        console.log('The checkbox was toggled');
    }

    const navigate3=useNavigate();

    const handleClick3=(e)=>{
        e.preventDefault()

        const url = "http:/localhost:8000/Login1"
        const request = {matrimony:matrimony,password:password};
        const header = {};

        axios.post(url,request,header)

        .then((response)=>{
            if(response.data.length>1){
                console(JSON.stringify(response.data.length))
                navigate3('/ProflieList1');
            }
            else{
                alert("error : username" );
            }
         })

        .carry((error)=>{
            console(error)
        })
    }
    // const handleClick3=(e)=>{
    //     alert("matrimony=>" + matrimony);
    //     navigate3('/ProflieList1')
    // }

    const navigate4=useNavigate();
    const handleClick4=(e)=>{
      navigate4('/')
    }

    return(
      <div class="outer">
        <div class="logincontainter">
            <div class="loginheader">
                <label>Login</label>
                <button onClick={(e)=>handleClick4(e)}><AiOutlineClose /></button>
            </div>
            <div class="loginbody">
                <div class="logininnerbody">
                    <label class ="loginlabel">Matrimony Id/Mobile No./E-mail</label>
                    <input class="logininput" onChange={(e)=>{handleMatrimonyChange(e)}} value={matrimony} type="text"  placeholder='MatrimonyID'></input>
                    <label class ="loginlabel">Password</label>
                    <input class="logininput" onChange={(e)=>{handlePasswordChange(e)}} value={password} type="text"  placeholder='Password'></input>
                </div>
                <div class="logincheck">
                    <input onChange={(e)=>{handleCheckedChange(e)}} type="checkbox" placeholder=''></input> 
                    <label>Keep me logged in</label>
                </div>
                <div class="loginbutton">
                    <button onClick={(e)=>handleClick3(e)}>LOGIN</button>
                </div>
                <div class="loginforget">
                    <label>Forgot Password? </label>
                    <label> | </label>
                    <label> Login Via OTP</label>
                </div>

            </div>
            <div class="loginfooter">

            </div>
        </div>
     </div>   
    )
}
export default Login1;
