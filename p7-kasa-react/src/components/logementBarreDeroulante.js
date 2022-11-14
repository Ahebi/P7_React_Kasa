import { useEffect } from "react";
import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function LogementBarreDeroulante() {
    let toggleEvent = function (event) {
        event.target.classList.toggle("rotate");
    };

    useEffect(() => {
        let bouton = document.querySelectorAll(
            ".LogementBarreDeroulante_fleche"
        )[0];

        console.log("Appel de useEffect");

        bouton.removeEventListener("click", toggleEvent);
        bouton.addEventListener("click", toggleEvent);
    });

    return (
        <div className="LogementBarreDeroulante">
            <div className="LogementBarreDeroulante_barre">
                Equipements
                <img
                    className="LogementBarreDeroulante_fleche"
                    src={VectorFlecheBas}
                    alt="icone cliquable  de fleche "
                ></img>
            </div>
            <div className="LogementBarreDeroulante_page">
                <p>Climatisation </p>
                <p>Wi-Fi</p>
                <p>Cuisine</p>
                <p>Espace de travail</p>
                <p>Fer à repasser</p>
                <p>Sèche-cheveux</p>
                <p>Cintres</p>
            </div>
        </div>
    );
}
