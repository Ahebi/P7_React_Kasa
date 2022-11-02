import { useEffect } from "react";
import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function BarreDeroulante() {
    useEffect(() => {
        let bouton = document.querySelectorAll(".barreDeroulante_fleche")[0];
        console.log(bouton);

        bouton.addEventListener("click", function (event) {
            console.dir(event.target.classList);
            event.target.classList.add("rotate");
            console.log(event.target);
        });
    });

    return (
        <div className="barreDeroulante">
            <div className="barreDeroulante_barre">
                Equipements
                <img
                    className="barreDeroulante_fleche"
                    src={VectorFlecheBas}
                    alt="icone de fleche vers le bas"
                ></img>
            </div>
            <div className="barreDeroulante_page">
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
