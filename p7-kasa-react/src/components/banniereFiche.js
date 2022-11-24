import VectorFlecheGauche from "../img/VectorFlecheGauche.png";
import VectorFlecheDroite from "../img/VectorFlecheDroite.png";

export default function banniereFiche() {
    return (
        <div id="components_banniere">
            <div className="ficheLogement_divVectorFleche">
                <img src={VectorFlecheGauche} alt="Fleche vers la gauche"></img>
            </div>

            <div className="ficheLogement_divVectorFleche">
                <img src={VectorFlecheDroite} alt="Fleche vers la Droite"></img>
            </div>
        </div>
    );
}
