import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function EquipementBarreDeroulante(props) {
    let toggleEvent = function (event) {
        let barreDeroulante = event.target.closest(
            ".equipementBarreDeroulante"
        );

        let pageDeroulante = barreDeroulante.getElementsByClassName(
            "equipementBarreDeroulante_page"
        )[0];
        let iconeFleche = barreDeroulante.getElementsByClassName(
            "equipementBarreDeroulante_fleche"
        )[0];

        iconeFleche.classList.toggle("equipementRotate");
        pageDeroulante.classList.toggle("equipementDeroulement");
    };

    return (
        <div className="equipementBarreDeroulante">
            <div
                className="equipementBarreDeroulante_barre "
                onClick={toggleEvent}
            >
                {props.titre}
                <img
                    className="equipementBarreDeroulante_fleche "
                    src={VectorFlecheBas}
                    alt="icone cliquable  de fleche "
                ></img>
            </div>
            <div className="equipementBarreDeroulante_page">
                {props.description}
            </div>
        </div>
    );
}
