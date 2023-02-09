import "./login.css"
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/navbar"
import { User } from "../../services/auth"
import { useState } from "react"

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const authValidation = () => {
        //send post user and pass 
        // get answer
        if (pass === User.Password && user === User.Email) {
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
                            <label htmlFor="femail" className="label-form">Email</label>
                            <input type={"email"} onChange={e => setUser(e.target.value)} className="input-form"></input>
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