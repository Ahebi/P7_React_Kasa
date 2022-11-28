import VectorFlecheGauche from "../img/VectorFlecheGauche.png";
import VectorFlecheDroite from "../img/VectorFlecheDroite.png";

export default function banniereFiche() {
    return (
        <div id="components_banniere">
            <div className="ficheLogement_divVectorFleche">
                <img src={VectorFlecheGauche} alt="Fleche vers la gauche"></img>
            </div>
            <figure id="ficheLogement_figureBanniere">
                <img
                    id="ficheLogement_imgBanniere"
                    src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                    alt="banniere personalisé du logement"
                ></img>
                <figcaption>1/4</figcaption>
            </figure>

            <div className="ficheLogement_divVectorFleche">
                <img src={VectorFlecheDroite} alt="Fleche vers la Droite"></img>
            </div>
        </div>
    );
}
