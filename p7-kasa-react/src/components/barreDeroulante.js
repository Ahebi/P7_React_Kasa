import VectorFlecheBas from "../img/VectorFlecheBas.png";

export default function barreDeroulante() {
    let boutonFleche = document.getElementsByClassName(
        "barreDeroulante_fleche"
    );
    boutonFleche.addEvenetListener("click", function () {
        boutonFleche.classList.toggle("rotate");
    });

    return (
        <div className="barreDeroulante">
            <div className="barreDeroulante_barre">
                Equipements
                <img
                    className="barreDeroulante_fleche"
                    src={VectorFlecheBas}
                    alt="icone de fleche vers le bas"
                ></img>
            </div>
            <div className="barreDeroulante_page">
                <p>Climatisation </p>
                <p> Wi-Fi</p>
                <p>Cuisine</p>
                <p>Espace de travail</p>
                <p> Fer à repasser</p>
                <p>Sèche-cheveux</p>
                <p> Cintres</p>
            </div>
        </div>
    );
}
