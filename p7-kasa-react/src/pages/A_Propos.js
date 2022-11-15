import BarreDeroulanteFiabilite from "../components/A_propos_barreDeroulante/barreDeroulanteFiabilite";
import banniereAPropos from "../img/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
export default function A_propos() {
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
                    <BarreDeroulanteFiabilite />
                </div>
            </div>
        </>
    );
}
