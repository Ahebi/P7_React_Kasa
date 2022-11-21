export default function Thumb() {
    function affichageThumb() {
        fetch("logements.json")
            .then(function (res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function (logements) {
                return (
                    <div>
                        {logements.map((logement) => (
                            <figure key={logement.id} class="thumb_figure">{`
                                <img
                                    class="thumb_img"
                                    src="${logement.cover}"
                                    alt="${logement.title}"
                                ></img>
                                <figcaption class="thumb_text">
                                   
                                    ${logement.title}
                                </figcaption>
                                `}</figure>
                        ))}
                    </div>
                );
            })
            .catch(function (_err) {
                console.log("Erreur ! : " + _err);
            });
    }
    affichageThumb();
}
