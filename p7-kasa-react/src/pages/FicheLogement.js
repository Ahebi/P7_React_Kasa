import BanniereFiche from "../components/banniereFiche";

export default function FicheLogement() {
    fetch("logements.json")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (logements) {
            /*let idParam = getParameter("id");
            let logement = logements.find(
                (logement) => logement.id === idParam
            );*/
        })
        .catch(function (_err) {
            console.log("Erreur ! : " + _err);
        });
    return (
        <div id="divFicheLogement">
            <BanniereFiche />
        </div>
    );
}
