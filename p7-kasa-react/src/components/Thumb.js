import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Thumb() {
    const [logements, setLogements] = useState([]);

    const fetchLogements = async () => {
        const response = await fetch("logements.json");
        const data = await response.json();

        setLogements(data);
    };

    useEffect(() => {
        fetchLogements();
    }, []);

    return (
        <div className="mainDivThumb">
            {logements.map((logement) => (
                <NavLink to={`/fiche_logement/${logement.id}`}>
                    <figure key={logement.id} class="thumb_figure">
                        <img
                            class="thumb_img"
                            src={logement.cover}
                            alt={logement.title}
                        ></img>
                        <figcaption class="thumb_text">
                            {logement.title}
                        </figcaption>
                    </figure>
                </NavLink>
            ))}
        </div>
    );
}
