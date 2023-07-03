import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Register() {
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [details,setDetails]=useState('');
    const [errors, setErrors] = useState();
        
       
    const fname=(e)=>{
        setFirstname(e.target.value)
    }
    const lname=(e)=>{
        setLastname(e.target.value)
    }
    const mail=(e)=>{
        setEmail(e.target.value)
    }
    const pwd=(e)=>{
        setPassword(e.target.value)
    }
    const number=(e)=>{
        setMobile(e.target.value)
    }

    const data = {
        firstname: firstname,
        lastname:lastname,
        email:email,
        password: password,
        mobile:mobile
    };
    
    
    const submit = async(e) => {    
        e.preventDefault()

        if(firstname===''){
            alert('Username is required') 
        }
         if(lastname===''){
             alert('last name is required')
        }
        if(email==='')
        {
            alert('email is required')    
        }
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            alert('invalid email')
        }
        if(password===''){
            alert('password is required')
        }
        else if(password.length<5)
        {
            alert('enter miminum 5 charcters')
        }
        if(mobile==='')
        {
            alert('mobile number is required')
        }
        else if(!/^[0-9]{10}$/.test(mobile )){
            alert('10 numbers required')
        }
        else{
            alert("registred successfully")
        }  
       console.log(data);    
      
        await axios.post('http://localhost:8010/register', data)
        .then((response) => {
          console.log(response.data);
        })

        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setMobile('');
         }
       // console.log(details)
      
return (
    <div className='register'>
        <h2>Registrationform</h2>
        <form className='form' action="" onSubmit={submit}> 
        
            <div>
            <label className='label'>Firstname</label><br></br>
            <input className='input' type="text" name="firstname" placeholder='entername' value={firstname} onChange={fname}/><br></br><br></br> 
            {/* {errors && <span>{errors}</span>} */}
        </div>
        <div> 
              <label className='label'>Lastname</label><br></br>
              <input className='input' type="text" name="lastname" value={lastname} onChange={lname}/><br></br><br></br>
       </div>
            <div> 
                <label className='label'>Email</label><br></br>
                <input  className='input' type="text" name="email" value={email} onChange={mail}/><br></br><br></br>
            </div> 
            <div> 
                <label className='label'>Password</label><br></br>
                <input  className='input' type="text" name="passw"  value={password} onChange={pwd}/><br></br><br></br>
            </div>  
             <div> 
            <label className='label'>Mobile</label><br></br>
            <input  className='input' type="number" name="number"  value={mobile} onChange={number}/> 
            </div>  
          
            <button type="submit" >submit</button>
            
        </form>
        </div>
       
    )
}

export default Register;
