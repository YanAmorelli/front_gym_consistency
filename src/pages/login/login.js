import "./login.css"
import NavBar from "../components/navbar/navbar"

function Login() {
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
                            <input type={"email"} className="input-form"></input>
                        </div> 

                        <div className="form-field">
                            <label htmlFor="fpass" className="label-form">Password</label>
                            <input type={"password"} className="input-form"></input>
                        </div>

                        <div className="button-form">
                            <button className="login-button">Log In</button>
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