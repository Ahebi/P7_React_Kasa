import { Routes, Route } from "react-router-dom";
import "./scss/app.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./pages/accueil";
import A_Propos from "./pages/A_Propos";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/A Propos" element={<A_Propos />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
