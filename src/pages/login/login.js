import "./login.css"
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/navbar"
import { useState } from "react"
import { Authenticate } from "../../services/auth"

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    
    const authValidation = () => {
        const data = {
            "username": user,
            "password": pass
        };
        const response = Authenticate(data);

        if (response.logged) {
            document.cookie = "isAuthenticated=True";        
            navigate("/wentgym");
        }

        return;
    }

    return(
        <main className="main">
            <NavBar
                wasAuthenticated={false}
            />            
            <body className="container">
                <div className="box">
                    <form>
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
                            <button onClick={authValidation} className="login-button">Log In</button>
                        </div>
                        
                        <div className="button-form">
                            <p className="linktext-form">Forgot my password</p>
                        </div>
                    </form>
                </div>
            </body>
        </main>
    )
}

export default Login