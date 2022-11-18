export default function Thumb() {
    function affichageThumb() {
        fetch("logements.json")
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
                    //let id = logements[i].id;

                    listeLogements.innerHTML += `<a href="#">
                        <figure class="thumb_figure"> 
                            <img class="thumb_img" src="${logementCover}" alt="image cliquable de ${logementName}"></img>
           
                            <figcaption class="thumb_text">
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
