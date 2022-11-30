import fullStar from "../img/fullStar.png";
import emptyStar from "../img/emptyStar.png";

export default function Rating(props) {
    let rating = props.rating;
    let arrayStar = [];
    let i = 0;
    while (i < 5) {
        i++;
        if (i <= rating) {
            arrayStar.push(
                <img
                    className="star "
                    key={i}
                    src={fullStar}
                    alt="etoile pleine"
                ></img>
            );
        } else {
            arrayStar.push(
                <img
                    className="star "
                    key={i}
                    src={emptyStar}
                    alt="etoile vide"
                ></img>
            );
        }
    }
    return <div>{arrayStar.map((star) => star)}</div>;
}
