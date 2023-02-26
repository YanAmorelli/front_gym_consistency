// https://www.geeksforgeeks.org/pure-css-responsive-side-menu-layout/
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/tff.png"
import User from "../../../assets/generic-user.svg"
import "./navbar.css"
import { useEffect, useState } from "react";
import { getCookie, parseJwt } from "../../../util/cookie";

function NavBar() {
    const navigate = useNavigate();
    const [username, setUsername] = useState();

    useEffect(() => {
        const jwt = getCookie("tff_token");
        const userInfo = parseJwt(jwt);
        setUsername(userInfo.username);
    }, []);

    const goToHomePage = () => {
        navigate("/")
    };

    const goToStatisticsPage = () => {
        navigate("/monthlyStatus");
    };

    const goToFriendsPage = () => {
        navigate("/friends");
    };

    return (
        <ul>
            <li className="image-logo" onClick={goToHomePage}>
                <img src={Logo} alt="main-logo" className="logo"/>                
            </li>
            <li onClick={goToFriendsPage}>Friends</li>
            <li onClick={goToStatisticsPage}>My statistics</li>
            <span className="container-user-menu">
                <li className="container-user-li">
                    <img src={User} alt="user" className="user-photo"></img>
                    <span className="user-info">
                        <p>Yan</p>
                        <p>@{username}</p>
                    </span>
                </li>
            </span>
        </ul>
    );
};

export default NavBar;