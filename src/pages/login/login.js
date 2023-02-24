// https://stackoverflow.com/questions/63679339/axios-returning-pending-promise
import "./login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { HeaderLogin } from "./header/header";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { AlertError } from '../components/alerts/alerts';

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const authValidation = async(e) => {
        e.preventDefault();
        const data = {
            username: user,
            password: pass
        };      
        
        try {
            await LoginUser(data).then((response) => {
            document.cookie = "tff_token="+response.data.token;
            navigate("/", {replace:true});
            return;
            });
        }
        catch {
            AlertError("Usuário ou senha inválidos");
            return;
        };
    };
    
    const LoginUser = (user) => {          
        try {
            const request = axios.post('http://localhost:8080/loginUser', user)
            return request
        }
        catch(err){
            console.log(err);
        }
    };
    
    const forgotPassword = () => {
        navigate("/forgotPassword");
    };

    return(
        <main className="main">
            <HeaderLogin />
            <body className="container">
                <div className="box">
                    <form onSubmit={authValidation} >
                        <ToastContainer  />
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
    );
};

export default Login