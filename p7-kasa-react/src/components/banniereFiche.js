import VectorFlecheGauche from "../img/VectorFlecheGauche.png";
import VectorFlecheDroite from "../img/VectorFlecheDroite.png";

export default function banniereFiche(props) {
    return (
        <div id="components_banniere">
            <div
                id="divVectorFlecheGauche"
                className="ficheLogement_divVectorFleche"
            >
                <img src={VectorFlecheGauche} alt="Fleche vers la gauche"></img>
            </div>
            <figure id="ficheLogement_figureBanniere">
                <img
                    id="ficheLogement_imgBanniere"
                    src={props.pictures[0]}
                    alt="banniere personalisé du logement"
                ></img>
                <figcaption id="banniereLogementFigcaption">1/4</figcaption>
            </figure>

            <div
                id="divVectorFlecheDroite"
                className="ficheLogement_divVectorFleche"
            >
                <img src={VectorFlecheDroite} alt="Fleche vers la Droite"></img>
            </div>
        </div>
    );
}
