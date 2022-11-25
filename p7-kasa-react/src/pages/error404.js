import logo404 from "../img/404.png";
import { NavLink } from "react-router-dom";
export default function error404() {
    return (
        <div id="mainDiv404">
            <figure id="error404_figure">
                <img
                    src={logo404}
                    alt="logo erreur 404 la page n'existe pas !"
                ></img>
            </figure>
            <p id="error404_texte">
                Oups ! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" end>
                <p id="error404_lienPageAccueil">
                    Retourner sur la page d’accueil
                </p>
            </NavLink>
        </div>
    );
}
