import useFetchLogements from "../hooks/useFetchLogements";
import { NavLink } from "react-router-dom";

export default function Thumb() {
    const { logements, isLoading, error } = useFetchLogements();
    console.log("logements : ");
    console.log(logements);
    console.log("isloading = " + isLoading);

    return (
        <div id="gallery_logements">
            {logements.map((logement) => (
                <NavLink
                    key={logement.id}
                    className="NavLinkThumb"
                    to={`/fiche_logement/${logement.id}`}
                >
                    <figure className="thumb_figure">
                        <img
                            className="thumb_img"
                            src={logement.cover}
                            alt={logement.title}
                        ></img>
                        <figcaption className="thumb_text">
                            {logement.title}
                        </figcaption>
                    </figure>
                </NavLink>
            ))}
        </div>
    );
}
