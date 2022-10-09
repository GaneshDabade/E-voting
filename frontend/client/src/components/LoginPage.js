import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../App.css'

export default function LoginPage() {
    const navigate = useNavigate();
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
    const loginUser =async (e)=>{
         e.preventDefault();
         const res = await fetch('/login',{
            method:"POST",
            headers :{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({
                email,password
            })
         });
         const data = res.json();
         if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
         }else{
            navigate("/home");
         }
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form method='POST'>
                <p>
                    <label>Email address</label><br/>
                    <input type="text" name="first_name" required autoComplete='nope' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required autoComplete='nope' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit" name= "login" onClick={loginUser}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}