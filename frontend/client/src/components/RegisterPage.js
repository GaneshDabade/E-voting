import React,{useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import '../App.css'

export default function RegisterPage() {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
      console.log(e);
      name = e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
    }

    const PostData = async(e)=>{
           e.preventDefault();
           const {name,email,phone,password,cpassword} = user;
           const res = await fetch('/register',{
            method:"POST",
            headers :{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
           });
           const data = await res.json();
           if(res.status === 422 || !data){
            window.alert("Invalid Registeration");
            console.log("Invalid Registeration");
           }
           else{
             window.alert("Registeration Successfully");
            console.log("Registeration Successfully");
            navigate("/login");
           }
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form method="POST">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="name" autoComplete="nope" required value={user.name} onChange={handleInputs}/>
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" autoComplete="nope" required value={user.email} onChange={handleInputs} />
                </p>
                <p>
                    <label>Phone</label><br/>
                    <input type="number" name="phone" autoComplete="nope" required value={user.phone} onChange={handleInputs} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" autoComplete="nope" required value={user.password} onChange={handleInputs} />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="cpassword" autoComplete="nope" required  value={user.cpassword} onChange={handleInputs}/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" name="signup" onClick={PostData}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}