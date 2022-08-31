import "./style.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
function TestCheckDelete() {
    const [array, setArrayFunc] = useState([]);
    const [isChecked, setisChecked]= useState([]);
    useEffect(() => {
        // write axios to fetch all values from table --https://m81g8ih26d.execute-api.us-west-2.amazonaws.com/test
        // set values to an array using state variable
        //then display values using map function(in return)

        const url = "https://m81g8ih26d.execute-api.us-west-2.amazonaws.com/test"
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



    }, [])

    const handleCheckClick = ((e,item)=>{
        const {value, checked}= e.target;
        console.log(value);
        if(checked)
        {
          setisChecked([...isChecked, value]);
        } else{
          setisChecked(isChecked.filter( (e)=>e!== value));
        }
      })
       
   

    const handleDeleteClick = (e,id)=> {
        e.preventDefault();
        console.log(id)
        // on click of delete button  a function is called
        // this is the function body to write the code block
        // here call the axios to delete the row
        const url = "https://e491m2var5.execute-api.us-west-2.amazonaws.com/testuserdelete"
        const request  = '{"id":"'+id+'"}'
        
        const header = {}
        axios.post(url,request,header)
             .then((respone)=>{
                if(respone.data.length!==0)
                {
                console.log(id);
                alert("result delete record");
                }
                else
                {
                    alert("error result delete record");
                }   
                
            })

              .catch((error) => {
                console.log(error)
              });
    
    }

    return (
        <div className="usercheckdelete">
            <h1 className="userCheckheader">User Name Delete</h1>
            <div>
                <table className="tbl1">

                    <tr className="tr11">

                        <th></th>
                        <th>User Name</th>
                        <th>Password</th>

                    </tr>

                    {array.map((item, indx) => {
                        return(
                        <tr className="tr11">
                            <td><input type="checkbox" value={item.id} checked ={item.ischecked} onClick={(e) => {
                                    handleCheckClick(e, item)
                                }}></input></td>
                            <td>{item.txtUsername}</td>
                            <td>{item.txtPassword}</td>
                        </tr>
                        )
                    })
                    }
                </table>
                
                <div className="deletebutton">
                    <button  onClick={(e) => handleDeleteClick(e)}>Delete</button>
                </div>
            </div>

        </div>
    )
}
export default TestCheckDelete;