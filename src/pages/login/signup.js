import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/navbar"
import "./signup.css"

function SignUp() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = () => {
        navigate("/");
    }

    return (
        <main className="main">
            <NavBar
                wasAuthenticated={false}
            />            
            <body className="container">
                <div className="signup-box">
                    <form onSubmit={createUser} >
                        <h1 className="title">New user?</h1>

                        <div className="form-field">
                            <label htmlFor="fname" className="label-form">Full Name</label>
                            <input type={"text"} onChange={e => setName(e.target.value)} className="input-form"></input>
                        </div> 

                        <div className="form-field">
                            <label htmlFor="fuser" className="label-form">Username</label>
                            <input type={"text"} onChange={e => setUser(e.target.value)} className="input-form"></input>
                        </div> 

                        <div className="form-field">
                            <label htmlFor="femail" className="label-form">Username</label>
                            <input type={"email"} onChange={e => setEmail(e.target.value)} className="input-form"></input>
                        </div> 

                        <div className="form-field">
                            <label htmlFor="fpass" className="label-form">Password</label>
                            <input type={"password"} onChange={e => setPass(e.target.value)} className="input-form"></input>
                        </div>

                        <div className="form-field">
                            <label htmlFor="fpass" className="label-form">Confirm password</label>
                            <input type={"password"} onChange={e => setConfirmPass(e.target.value)} className="input-form"></input>
                        </div>

                        <div className="button-form">
                            <button type="submit" className="login-button">Create user</button>
                        </div>
                    </form>
                </div>
            </body>
        </main>
    )
}

export default SignUp