import { response } from 'express';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [registerdetails,setregisterdetails]=useState();
    const mail=(e)=>{
      setEmail(e.target.value)
    }
    const passwd=(e)=>{
        setPassword(e.target.value)
    }
    // useEffect(()=>{
    //     axios.get('http://localhost:8010/registeruser')
    //    .then((response)=>{
    //     setregisterdetails(response.data)
    //     console.log(response.data)
    //    })           
    // })
    const submit=()=>{
        alert("ok")
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                  <label>Username</label><br></br>
                  <input type='text' value={email} onChange={mail} /><br></br>
               </div>
               <div>
                 <label>Password</label><br></br>
                 <input type='password' value={password} onChange={passwd}/>
              </div>
               <button type='submit'>Submit</button>
            </form>
           
        </div>
    )
}

export default Login
