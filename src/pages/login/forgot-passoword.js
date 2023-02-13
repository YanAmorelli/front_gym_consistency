import { useState } from "react"
import NavBar from "../components/navbar/navbar"
import "./login.css"
import axios from "axios";
import "./forgot-password.css"
import { useNavigate } from "react-router-dom"

function ForgotPassword() {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    const requestNewPassword = () => {
        const data = {username: user};
        sendRequestNewPassword(data);
        navigate("/")
    }

    const sendRequestNewPassword = (user) => {
        try {
            axios.post("http://localhost:8080/forgetPassword", user);
        }
        catch(error) {
            console.error(error);
        };
    }

    return (
        <main className="main">
            <NavBar
                wasAuthenticated={false}
            />            
            <body className="container">
                <div className="forgot-pass-box">
                    <form onSubmit={requestNewPassword} >
                        <h1 className="title">Forgot Password?</h1>
                        <div className="form-field">
                            <label htmlFor="fuser" className="label-form">Username</label>
                            <input type={"text"} onChange={e => setUser(e.target.value)} className="input-form"></input>
                        </div>                         

                        <div className="button-form">
                            <button type="submit" className="new-password-button">Request new password</button>
                        </div>
                                                
                    </form>
                </div>
            </body>
        </main>
    )
}

export default ForgotPassword