import { useState } from "react"
import "./login.css"
import axios from "axios";
import "./forgot-password.css"
import { AlertPromise } from "../components/alerts/alerts";
import { ToastContainer } from "react-toastify";
import { HeaderLogin } from "./header/header";

function ForgotPassword() {
    const [user, setUser] = useState();

    const requestNewPassword = (e) => {
        e.preventDefault();
        const data = {username: user};
        const successMessage = "Email com nova senha enviado com sucesso!";
        AlertPromise(sendRequestNewPassword(data), successMessage);
    };

    const sendRequestNewPassword = (user) => {
        const request = axios.post("http://localhost:8080/forgetPassword", user, setTimeout(3000));
        return request;
    }

    return (
        <main className="main">
            <HeaderLogin /> 
            <body className="container">
                <div className="forgot-pass-box">
                    <form onSubmit={requestNewPassword} >
                        <ToastContainer />
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