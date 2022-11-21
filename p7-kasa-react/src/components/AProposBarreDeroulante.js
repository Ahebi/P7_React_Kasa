import { useEffect } from "react";
import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function AProposBarreDeroulante() {
    let toggleEvent = function (event) {
        let iconeFleche = document.getElementsByClassName(
            "aProposBarreDeroulante_fleche"
        )[0];
        let pageDeroulante = document.getElementsByClassName(
            "aProposBarreDeroulante_page"
        )[0];
        iconeFleche.classList.toggle("aProposRotate");
        iconeFleche.classList.toggle("aProposReverseRotate");
        pageDeroulante.classList.toggle("aProposDeroulement");
        pageDeroulante.classList.toggle("aProposReverseDeroulement");
    };

    useEffect(() => {
        let bouton = document.querySelectorAll(
            ".aProposBarreDeroulante_barre"
        )[0];

        console.log("Appel de useEffect");

        bouton.removeEventListener("click", toggleEvent);
        bouton.addEventListener("click", toggleEvent);
    });

    return (
        <div className="aProposBarreDeroulante">
            <div className="aProposBarreDeroulante_barre aProposReverseDeroulement">
                Fiabilite
                <img
                    className="aProposBarreDeroulante_fleche aProposReverseRotate"
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
