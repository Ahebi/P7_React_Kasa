import AProposBarreDeroulante from "../components/AProposBarreDeroulante";
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
                    <AProposBarreDeroulante />
                </div>
            </div>
        </>
    );
}
