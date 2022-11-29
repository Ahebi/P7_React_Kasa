import logoFooter from "../img/logoFooter.png";
export default function Footer() {
    return (
        <footer>
            <div>
                <img src={logoFooter} alt="logo Kasa blanc"></img>
            </div>
            <div id="textFooter"> © 2020 Kasa. All rights reserved</div>
        </footer>
    );
}
