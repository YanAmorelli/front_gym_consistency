import Logo from "../../../assets/tff.png"
import "./navbar.css"

function NavBar() {
    return(
        // Todo: Create a conditional that only shows Sign Up if the user didn't login
        <header>
            <span class="image-clickable">
                <img src={Logo} alt="main-logo" class="logo"/>                
            </span> 
            <nav>
                <ul class="nav-links">
                    <li>Friends</li>
                    <li>League</li>
                    <li>My statistics</li>
                </ul>
            </nav>     
            <button className="signup-button">Sign Up</button>
        </header>
    )
}

export default NavBar