import { Routes, Route } from "react-router-dom";
import "./scss/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/accueil";
import APropos from "./pages/A_Propos";
import FicheLogement from "./pages/FicheLogement";
import Error404 from "./pages/error404";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/a_propos" element={<APropos />} />
                <Route path="/fiche_logement/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
