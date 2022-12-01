import VectorFlecheGauche from "../img/VectorFlecheGauche.png";
import VectorFlecheDroite from "../img/VectorFlecheDroite.png";
import { useState } from "react";

export default function BanniereFiche(props) {
    let [currentIndex, setCurrentIndex] = useState(0);
    let toggleLeftArrow = function () {
        if (currentIndex >= 1) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(props.pictures.length - 1);
        }
    };

    let toggleRightArrow = function () {
        if (currentIndex + 1 < props.pictures.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    return (
        <div id="components_banniere">
            <div
                onClick={toggleLeftArrow}
                id="divVectorFlecheGauche"
                className="ficheLogement_divVectorFleche"
            >
                <img
                    className="banniere_img_fleche"
                    src={VectorFlecheGauche}
                    alt="Fleche vers la gauche"
                ></img>
            </div>
            <figure id="ficheLogement_figureBanniere">
                <img
                    id="ficheLogement_imgBanniere"
                    src={props.pictures[currentIndex]}
                    alt="banniere personalisé du logement"
                ></img>
                <figcaption id="banniereLogementFigcaption">
                    {currentIndex + 1 + "/" + props.pictures.length}
                </figcaption>
            </figure>

            <div
                onClick={toggleRightArrow}
                id="divVectorFlecheDroite"
                className="ficheLogement_divVectorFleche"
            >
                <img
                    className="banniere_img_fleche"
                    src={VectorFlecheDroite}
                    alt="Fleche vers la Droite"
                ></img>
            </div>
        </div>
    );
}
