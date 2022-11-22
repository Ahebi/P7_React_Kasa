import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function AProposBarreDeroulante() {
    let toggleEvent = function () {
        let iconeFleche = document.getElementsByClassName(
            "aProposBarreDeroulante_fleche"
        )[0];
        let pageDeroulante = document.getElementsByClassName(
            "aProposBarreDeroulante_page"
        )[0];
        iconeFleche.classList.toggle("aProposRotate");

        pageDeroulante.classList.toggle("aProposDeroulement");
    };

    return (
        <div className="aProposBarreDeroulante">
            <div
                className="aProposBarreDeroulante_barre aProposReverseDeroulement"
                onClick={() => toggleEvent()}
            >
                Fiabilite
                <img
                    className="aProposBarreDeroulante_fleche aProposReverseRotate"
                    src={VectorFlecheBas}
                    alt="icone cliquable  de fleche "
                ></img>
            </div>
            <div className="aProposBarreDeroulante_page">
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes
                    les informations sont régulièrement vérifiées par nos
                    équipes.
                </p>
            </div>
        </div>
    );
}
