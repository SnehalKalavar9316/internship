import React from 'react'
import "./Login.css";
import LoginImage from "../../images/LoginImage.png"
import { Link } from 'react-router-dom';

export default function Login()
{
    return(
        <>
          <div>
           <div className="logincard">
                        <div className="firstdiv">
                        <div className="info">
                     <h1 style={{color:'#15186D',width:"500px"}}>Welcome To Admin</h1>
                       <label style={{margin:"15px"}}>Username</label><br/>
                       <input className="input"
                        type='email'/><br/>

                       <label style={{margin:"15px"}}>Password</label> <br/>
                       <input className="input"
                       type='password' /><br/>
                       <Link to ="/dashboard">
                       <button className="sign-up-btn"type='button'>Sign Up</button></Link>
                     </div>
                     </div>

                     
                     <div className="seconddiv">
                     <img src={LoginImage} alt='LoginImage' className="loginimg"/>

                     </div>
             
             
             
             
              </div>
           
            
        
        </div>

        
        
        </>
    )
}

