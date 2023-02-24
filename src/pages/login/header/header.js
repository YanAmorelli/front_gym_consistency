import { useNavigate } from "react-router-dom";
import Logo from "./../../../assets/tff.png";
import "./header.css"

export const HeaderLogin = () => {    
    const navigate = useNavigate();

    const goToSignUpPage = () => {
        navigate("/signUp");
    };

    const goToHomePage = () => {
        navigate("/login");
    };


    return (
    <header>
        <span onClick={goToHomePage} className="image-clickable">
            <img src={Logo} alt="main-logo" className="login-logo"/>                
        </span> 
        <button onClick={goToSignUpPage} className="signup-button">Sign Up</button>
    </header>
);
}