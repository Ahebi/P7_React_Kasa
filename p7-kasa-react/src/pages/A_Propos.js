import Tag from "../components/Tag";
import BanniereFiche from "../components/banniereFiche";
import LogementBarreDeroulante from "../components/logementBarreDeroulante";
export default function A_propos() {
    return (
        <>
            <div>
                ici test du component "Tag" <Tag />
            </div>
            <div>
                ici test du component "banniere" <BanniereFiche />
            </div>
            <div>
                ici test du component "barre deroulante "
                <LogementBarreDeroulante />
            </div>
        </>
    );
}
