import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function AProposBarreDeroulante(props) {
    let toggleEvent = function () {
        let pageDeroulante = document.getElementsByClassName(
            "aProposBarreDeroulante_page"
        )[props.numero];
        let iconeFleche = document.getElementsByClassName(
            "aProposBarreDeroulante_fleche"
        )[props.numero];

        iconeFleche.classList.toggle("aProposRotate");
        pageDeroulante.classList.toggle("aProposDeroulement");
    };

    return (
        <div className="aProposBarreDeroulante">
            <div
                className="aProposBarreDeroulante_barre "
                onClick={() => toggleEvent()}
            >
                {props.titre}
                <img
                    className="aProposBarreDeroulante_fleche "
                    src={VectorFlecheBas}
                    alt="icone cliquable  de fleche "
                ></img>
            </div>
            <div className="aProposBarreDeroulante_page">
                <p>{props.description}</p>
            </div>
        </div>
    );
}
