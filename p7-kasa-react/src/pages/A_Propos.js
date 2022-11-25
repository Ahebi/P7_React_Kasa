import AProposBarreDeroulante from "../components/AProposBarreDeroulante";
import banniereAPropos from "../img/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
export default function A_propos() {
    const descriptionFiabilité =
        "Les annonces postées sur Kasa garantissent une fiabilitétotale. Les photos sont conformes aux logements, et toutesles informations sont régulièrement vérifiées par noséquipes.";
    const descriptionRespect =
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const descriptionService =
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const descriptionSécurité =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    return (
        <>
            <div>
                <figure id="FigureAPropos">
                    <img
                        id="banniereAPropos"
                        src={banniereAPropos}
                        alt="banniere ou l'on voit une montagne"
                    ></img>
                </figure>
                <div id="divBarreDeroulante">
                    <AProposBarreDeroulante
                        titre={"Fiabilité"}
                        description={descriptionFiabilité}
                    />
                    <AProposBarreDeroulante
                        titre={"Respect"}
                        description={descriptionRespect}
                    />
                    <AProposBarreDeroulante
                        titre={"Service"}
                        description={descriptionService}
                    />
                    <AProposBarreDeroulante
                        titre={"Sécurité"}
                        description={descriptionSécurité}
                    />
                </div>
            </div>
        </>
    );
}
