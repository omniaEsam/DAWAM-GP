import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Fonsts/ArbFONTS-LamaSans-Medium.ttf";
import "./main.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import Search from "./pages/Home/Components/Search/Search";
import Home from "./pages/Home/Home";
import ResultSearch from './pages/ResultSearch/ResultSearch';
import Waqfs from './pages/Waqfs/Waqfs';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
         <Route path="/AboutPage" element={ <AboutPage/> } /> 
        <Route path="/search" element={ <Search/> } />
        <Route path="/waqfs" element={ <Waqfs/> } />
        <Route path="/contactUs" element={ <ContactUs/> } />
        <Route path="/ResultSearch/:id" element={ <ResultSearch/> } /> 
        </Routes>
       </BrowserRouter>
    </div>
  );
}


export default App;
