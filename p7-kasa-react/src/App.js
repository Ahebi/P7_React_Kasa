import { Routes, Route } from "react-router-dom";
import "./scss/app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";
import APropos from "./pages/A_Propos";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/a_propos" element={<APropos />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
