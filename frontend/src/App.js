import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Mainpage from "./components/mainpage/Mainpage";
import FilmDetailPage from "./components/film-details/FilmDetailPage";
export default function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="film-details" element={<FilmDetailPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
