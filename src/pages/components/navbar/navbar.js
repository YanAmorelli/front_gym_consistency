// https://www.geeksforgeeks.org/pure-css-responsive-side-menu-layout/
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/tff.png"
import User from "../../../assets/generic-user.svg"
import "./navbar.css"

function NavBar() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    };

    const goToStatisticsPage = () => {
        navigate("/monthlyStatus");
    }

    return (
        <ul>
            <li className="image-logo" onClick={goToHomePage}>
                <img src={Logo} alt="main-logo" className="logo"/>                
            </li>
            <li>Friends</li>
                <li onClick={goToStatisticsPage}>My statistics</li>
            <span className="container-user-menu">
                <li className="container-user-li">
                    <img src={User} alt="user" className="user-photo"></img>
                    <span className="user-info">
                        <p>Yan</p>
                        <p>@amorelliaoyan</p>
                    </span>
                </li>
            </span>
        </ul>
    );
};

export default NavBar;