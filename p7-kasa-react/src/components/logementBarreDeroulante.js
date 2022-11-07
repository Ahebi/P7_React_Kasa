import { useEffect } from "react";
import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function LogementBarreDeroulante() {
    useEffect(() => {
        let bouton = document.querySelectorAll(
            ".LogementBarreDeroulante_fleche"
        )[0];

        bouton.addEventListener("click", function (event) {
            if (bouton.classList.contains("rotate")) {
                event.target.classList.remove("rotate");
            } else {
                event.target.classList.add("rotate");
            }
        });
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
