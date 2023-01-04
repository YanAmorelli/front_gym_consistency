import Logo from "../../../assets/tff.png"
import "./navbar.css"

function NavBar(props) {

    function NavBarLogin() {
        return (
            <header>
                <span className="image-clickable">
                    <img src={Logo} alt="main-logo" className="logo"/>                
                </span> 
                <button className="signup-button">Sign Up</button>
            </header>
        );
    };

    function NavBarLogged() {
        return (
            <header className="navbar-header">
                <span className="image-clickable">
                    <img src={Logo} alt="main-logo" className="logo"/>                
                </span> 
                <nav>
                    <ul className="nav-links">
                        <li>Friends</li>
                        <li>League</li>
                        <li>My statistics</li>
                        <li>amorelliaoyan</li>
                    </ul>
                </nav>  
            </header>
        );
    };

    return(
        props.wasAuthenticated ? NavBarLogged() : NavBarLogin() 
    )
}

export default NavBar