export default function Thumb() {
    function affichageThumb() {
        fetch("p7-kasa-reactsrclogements.json")
            .then(function (res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function (logements) {
                console.log("Les logements reçus : " + logements);

                let listeLogements =
                    document.getElementById("gallery_logements");

                for (let i = 0; i < logements.length; i++) {
                    let logementName = logements[i].title;
                    let logementCover = logements[i].cover;

                    listeLogements.innerHTML += `<a href="#">
                        <figure className="thumb"> 
                            <img src="${logementCover}" alt="image cliquable de ${logementName}"></img>
           
                            <figcaption className="thumb_text">
                                ${logementName}
                            </figcaption>
                        </figure>
                    </a>`;
                }
            })
            .catch(function (_err) {
                console.log("Erreur ! : " + _err);
            });
    }

    affichageThumb();
}
