import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        
        <nav aria-label="main navigation">
            <ul className="nav-list">
                <li>
                    <NavLink class="link" to="/">
                        <ion-icon class="icon" name="home-outline"></ion-icon>Home
                    </NavLink>
                </li>
                <li>
                    <NavLink class="link" to="/About">
                        <ion-icon class="icon"name="accessibility-outline"></ion-icon>About
                    </NavLink>
                </li>
                <li>
                    <NavLink class="link" to="/Portfolio">
                
                        <ion-icon class="icon" name="tv-outline"></ion-icon>Portfolio
                    </NavLink>
                </li>
               

            </ul>
        </nav>
    );
}