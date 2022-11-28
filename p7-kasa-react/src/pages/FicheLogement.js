import BanniereFiche from "../components/banniereFiche";
import Tag from "../components/Tag";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import EquipementBarreDeroulante from "../components/equipementBarreDeroulante";
import Rating from "../components/Rating";

export default function FicheLogement() {
    let params = useParams();
    const logements = useFetch();

    console.log("Logements : ");
    console.log(logements);

    let logement = logements.find((logement) => params.id === logement.id);

    console.log("logement = " + logement);
    console.log("pictures : ");
    console.log(logement.pictures);

    return (
        <div id="divFicheLogement">
            {logement ? (
                <div id="ficheLogement_groupe1">
                    <BanniereFiche pictures={logement.pictures} />
                </div>
            ) : (
                ""
            )}
            {logement ? (
                <div id="ficheLogement_groupe2">
                    <div id="ficheLogement_groupe2_sectionGauche">
                        <h2 id="ficheLogement_titre"> {logement.title}</h2>
                        <p id="ficheLogement_lieu"> {logement.location} </p>
                        <div id="ficheLogement_groupe2_listeTag">
                            {logement.tags.map((tag) => (
                                <Tag tagName={tag} />
                            ))}
                        </div>
                    </div>
                    <div id="ficheLogement_groupe2_sectionDroite">
                        <div id="ficheLogement_profil">
                            {logement.host.name}
                            <img
                                id="ficheLogement_photoProfil"
                                src={logement.host.picture}
                                alt="profil"
                            ></img>
                        </div>
                        <Rating rating={logement.rating} />
                    </div>
                </div>
            ) : (
                ""
            )}
            {logement ? (
                <div id="ficheLogement_groupe3">
                    <EquipementBarreDeroulante
                        titre={"Description"}
                        description={
                            "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
                        }
                    />
                    <EquipementBarreDeroulante
                        titre={"Equipements"}
                        description={
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: "1px",
                                    margin: "1px",
                                }}
                            >
                                {logement.equipments.map((ligne) => (
                                    <li key={ligne}>{ligne}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
