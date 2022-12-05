import BanniereFiche from "../components/BanniereFiche";
import Tag from "../components/Tag";
import useFetchLogements from "../hooks/useFetchLogements";
import { useParams } from "react-router-dom";
import EquipementBarreDeroulante from "../components/EquipementBarreDeroulante";
import Rating from "../components/Rating";
import { Navigate } from "react-router-dom";
export default function FicheLogement() {
    let params = useParams();
    const { logements, isLoading } = useFetchLogements("/logements.json");

    console.log("Logements : ");
    console.log(logements);
    let logement = {
        tags: [],
        host: {},
        equipments: [],
        pictures: [],
    };

    if (!isLoading) {
        logement = logements.find((logement) => params.id === logement.id);
        if (!logement) {
            return <Navigate to="/404" />;
        }
        console.log("logement = " + logement);
    }

    return (
        <div id="divFicheLogement">
            <div id="ficheLogement_groupe1">
                <BanniereFiche pictures={logement.pictures} />
            </div>

            <div id="ficheLogement_groupe2">
                <div id="ficheLogement_groupe2_sectionGauche">
                    <h2 id="ficheLogement_titre"> {logement.title}</h2>
                    <p id="ficheLogement_lieu"> {logement.location} </p>
                    <div id="ficheLogement_groupe2_listeTag">
                        {logement.tags.map((tag) => (
                            <Tag key={tag} tagName={tag} />
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
            <div id="ficheLogement_groupe3">
                <EquipementBarreDeroulante
                    titre={"Description"}
                    description={logement.description}
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
        </div>
    );
}
