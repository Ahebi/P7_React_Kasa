import { useEffect, useState } from "react";

export default function Thumb() {
    //setting the state variable
    const [logements, setLogements] = useState([]);

    const fetchLogements = async () => {
        const response = await fetch("logements.json");
        const data = await response.json();
        //update the state
        setLogements(data);
    };

    useEffect(() => {
        fetchLogements();
    }, []);

    return (
        <div>
            {logements.map((logement) => (
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
            ))}
        </div>
    );
}
