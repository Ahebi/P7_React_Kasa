import BanniereFiche from "../components/banniereFiche";
import Tag from "../components/Tag";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router";

export default function FicheLogement() {
    let { idParams } = useParams();
    const { logements } = useFetch(`logements.json`);

    console.log("idParams = " + { idParams });
    let logement = logements.map((logement) => idParams === logement.id);

    console.log("logement = " + logement);

    return (
        <div id="divFicheLogement">
            <div id="ficheLogement_groupe1">
                <BanniereFiche />
            </div>
            <div id="ficheLogement_groupe2">
                <div>
                    <h2 id="ficheLogement_titre"> {logement.title}</h2>
                    <p id="ficheLogement_lieu"> {logement.location} </p>
                    <div id="ficheLogement_groupe2_listeTag">
                        <Tag />
                        <Tag />
                    </div>
                </div>
                <div>
                    <div id="ficheLogement_profil">
                        {logement.host.name} et {logement.host.picture}
                    </div>
                    <div>{logement.rating}</div>
                </div>
            </div>
            <div id="ficheLogement_groupe3">
                barre deroulante descrpition et barre deroulante d'equipement
            </div>
        </div>
    );
}
