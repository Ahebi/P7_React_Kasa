import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function AProposBarreDeroulante(props) {
    let toggleEvent = function (event) {
        let barreDeroulante = event.target.closest(".aProposBarreDeroulante");

        let pageDeroulante = barreDeroulante.getElementsByClassName(
            "aProposBarreDeroulante_page"
        )[0];
        let iconeFleche = barreDeroulante.getElementsByClassName(
            "aProposBarreDeroulante_fleche"
        )[0];

        iconeFleche.classList.toggle("aProposRotate");

        pageDeroulante.classList.toggle("aProposDeroulement");
    };

    return (
        <div className="aProposBarreDeroulante">
            <div
                className="aProposBarreDeroulante_barre "
                onClick={toggleEvent}
            >
                {props.titre}
                <img
                    className="aProposBarreDeroulante_fleche "
                    src={VectorFlecheBas}
                    alt="icone cliquable  de fleche "
                ></img>
            </div>
            <div className="aProposBarreDeroulante_page aProposDeroulementMonte">
                <p>{props.description}</p>
            </div>
        </div>
    );
}
