import logoKasa from "../img/logoKasa.png";
import { NavLink } from "react-router-dom";
export default function header() {
    return (
        <header>
            <div id="divLogoKasa">
                <img id="logoKasa" src={logoKasa} alt="logo Kasa orange"></img>
            </div>
            <nav id="header_nav">
                <ul id="ulNav">
                    <li>
                        <NavLink to="/" end>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header_li">
                        <NavLink to="/a_propos">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
