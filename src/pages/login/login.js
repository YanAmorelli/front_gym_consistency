// https://stackoverflow.com/questions/63679339/axios-returning-pending-promise

import "./login.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/navbar"
import { useEffect, useState } from "react"
import { getCookie } from "../../util/cookie"
// import { Authenticate, LoginUser } from "../../services/auth"

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const isAuthenticated = getCookie("isAuthenticated");

    useEffect(() => {
        if(isAuthenticated==="True")
            navigate("/");
    }, [])

    const authValidation = async() => {
        const data = {
            username: user,
            password: pass
        };      
        
        const response = await LoginUser(data);
        
        if (response.data.logged) {
            document.cookie = "isAuthenticated=True";        
            document.cookie = "tff_token="+response.data.token;
        }
    }

    const LoginUser = (user) => {          
        try {
            const request = axios.post('http://localhost:8080/loginUser', user)
            return request
        }
        catch(err){
            console.log(err);
        }
    }

    const forgotPassword = () => {
        navigate("/forgotPassword");
    }

    return(
        <main className="main">
            <NavBar
                wasAuthenticated={false}
            />            
            <body className="container">
                <div className="box">
                    <form onSubmit={authValidation} >
                        <h1 className="title">Sign In</h1>
                        <div className="form-field">
                            <label htmlFor="femail" className="label-form">Username</label>
                            <input type={"text"} onChange={e => setUser(e.target.value)} className="input-form"></input>
                        </div> 

                        <div className="form-field">
                            <label htmlFor="fpass" className="label-form">Password</label>
                            <input type={"password"} onChange={e => setPass(e.target.value)} className="input-form"></input>
                        </div>

                        <div className="button-form">
                            <button type="submit" className="login-button">Log In</button>
                        </div>
                        
                        <div className="button-form">
                            <p onClick={forgotPassword} className="linktext-form">Forgot my password</p>
                        </div>
                    </form>
                </div>
            </body>
        </main>
    )
}

export default Login