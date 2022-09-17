import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { AnimalPage } from "./pages/AnimalPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HelpPage } from "./pages/HelpPage";
import { HomePage } from "./pages/HomePage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/animals" element={<AnimalPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Route>
        </Routes>
    )
}