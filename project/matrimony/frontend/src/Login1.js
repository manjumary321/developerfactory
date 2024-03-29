import "./style1.css";
import { AiOutlineClose} from "react-icons/ai";
// import { AiOutlineClose , AiFillBehanceCircle,AiFillBackward} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
function Login1(){

    const navigate3 =useNavigate();
    const [matrimony,setMatrimony]= useState('');
    const [password,setPassword] = useState('');

        const handleMatrimonyChange1=(e)=>{
        console.log(e.target.value)
        setMatrimony(e.target.value)
    }
        const handlePasswordChange1=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    
    const handleCheckedChange1=(e)=>{
        console.log('The checkbox was toggled');
    }
 

    const handleClick9=(e)=>{
        // alert("hi")
        e.preventDefault();
        // alert("hello")
        const url = "http://localhost:8000/Login";
        // const request = {username:"bina",password:"rte"};
        const request = {username:matrimony,password:password};
        const header = {};

        axios.post(url,request,header)

        .then((response)=>{
            if(response.data.length>0){
                //alert("succes")
               console.log(JSON.stringify(response.data.length))
                navigate3('/ProflieList1');
            }
            else{
                alert("error : username" );
            }
         })

        .carry((error)=>{
            console.log(error)
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
                    <input class="logininput" onChange={(e)=>{handleMatrimonyChange1(e)}} value={matrimony} type="text"  placeholder='MatrimonyID'></input>
                    <label class ="loginlabel">Password</label>
                    <input class="logininput" onChange={(e)=>{handlePasswordChange1(e)}} value={password} type="text"  placeholder='Password'></input>
                </div>
                <div class="logincheck">
                    <input onChange={(e)=>{handleCheckedChange1(e)}} type="checkbox" placeholder=''></input> 
                    <label>Keep me logged in</label>
                </div>
                <div class="loginbutton">
                    <button onClick={(e)=>handleClick9(e)}>LOGIN</button>
                </div>
                <div class="loginforget">
                    <label>Forgot Password? </label>
                    <label on> | </label>
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
