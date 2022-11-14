import { useEffect } from "react";
import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function LogementBarreDeroulante_fiabilite() {
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
        <div className="aProposBarreDeroulante">
            <div className="aProposBarreDeroulante_barre">
                Fiabilite
                <img
                    className="aProposBarreDeroulante_fleche"
                    src={VectorFlecheBas}
                    alt="icone cliquable  de fleche "
                ></img>
            </div>
            <div className="aProposBarreDeroulante_page">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </p>
            </div>
        </div>
    );
}
