import './Signup.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function Signup(){

    const navigate=useNavigate();
  const handleclick=(e)=>{
    

  }
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
        
    const handleClick=(e)=>{
        alert("matrimony=>" + matrimony);navigate('/ProfileList');
    }
    
    return(
        
        <div class="outer">
            <div class="container">
                
                <div class ="innercontainer">
                     <div class="row1">
                        <label class="login">Login</label>
                     </div>
                     <div class="row2">
                        <div class="innerrow2">
                            <div class="Matrimonyid">
                                <label>Matrimony Id/Mobile No./E-mail</label>
                                <input onChange={(e)=>{handleMatrimonyChange(e)}} value={matrimony} type="text"  placeholder='MatrimonyID'></input>
                            </div>
                            <div class="password">
                                <label>Password</label>
                                <input onChange={(e)=>{handlePasswordChange(e)}} value={password} type="password" placeholder='Password'></input> 
                            </div>
                            <div class="check">
                                    <input onChange={(e)=>{handleCheckedChange(e)}} type="checkbox" placeholder=''></input> 
                                    {/* <input onchange={(e)=>{handleCheckChange(e)}} type="checkbox" placeholder=''></input>  */}
                                    <label>Keep me logged in</label>

                            </div>
                            <div class="loginbutton">
                                <button onClick={(e)=>handleClick(e)}>Login</button>
                                {/* <button>Login</button> */}
                            </div>
                            <div class="forget">
                                <label>Forgot Password? </label>
                                <label>|</label>
                                <label> Login Via OTP</label>
                            </div>

                        </div>
                     </div>
                     <div class="row3"></div>
                </div>

            </div>

        </div>
    //     }
    // }
    )
}
export default Signup;