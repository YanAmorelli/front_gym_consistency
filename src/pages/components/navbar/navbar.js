import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/tff.png"
import "./navbar.css"

function NavBar() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    };

    return (
        <ul>
            <li className="image-logo" onClick={goToHomePage}>
                <img src={Logo} alt="main-logo" className="logo"/>                
            </li>
            <li>Friends</li>
            <li>League</li>
            <li>My statistics</li>
            <li className="user-menu">amorelliaoyan</li>
        </ul>
    );
};

export default NavBar;