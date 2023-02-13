import { useState } from "react"
import NavBar from "../components/navbar/navbar"
import "./login.css"

function ForgotPassword() {
    const [email, setEmail] = useState();

    const requestNewPassword = () => {
        
    }

    return (
        <main className="main">
            <NavBar
                wasAuthenticated={false}
            />            
            <body className="container">
                <div className="box">
                    <form onSubmit={requestNewPassword} >
                        <h1 className="title">Forgot Password</h1>
                        <div className="form-field">
                            <label htmlFor="femail" className="label-form">Email</label>
                            <input type={"email"} onChange={e => setEmail(e.target.value)} className="input-form"></input>
                        </div>                         

                        <div className="button-form">
                            <button type="submit" className="login-button">Request new password</button>
                        </div>
                                                
                    </form>
                </div>
            </body>
        </main>
    )
}

export default ForgotPassword