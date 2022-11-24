import BanniereFiche from "../components/banniereFiche";
import Tag from "../components/Tag";
import useFetch from "../hooks/useFetch";

export default function FicheLogement() {
    const { logements } = useFetch(`logements.json`);

    return (
        <div id="divFicheLogement">
            <div id="ficheLogement_groupe1">
                <BanniereFiche />
            </div>
            <div id="ficheLogement_groupe2">
                <div>
                    <h2 id="ficheLogement_titre"> Titre du logement ici</h2>
                    <p id="ficheLogement_lieu"> addresse du logement </p>
                    <div id="ficheLogement_groupe2_listeTag">
                        <Tag />
                        <Tag />
                    </div>
                </div>
                <div>
                    <div id="ficheLogement_profil">nom de l'hôte et photo</div>
                    <div>rating</div>
                </div>
            </div>
            <div id="ficheLogement_groupe3">
                barre deroulante descrpition et barre deroulante d'equipement
            </div>
        </div>
    );
}
