import logoKasa from "../img/logoKasa.png";
export default function header() {
    return (
        <header>
            <div>
                <img src={logoKasa} alt="logo Kasa orange"></img>
            </div>
            <nav>
                <ul id="ulNav">
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/A_Propos">A Propos</NavLink>{" "}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
