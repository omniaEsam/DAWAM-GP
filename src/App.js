import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js' ;
import Home from "./pages/Home/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import Search from "./pages/Home/Components/Search/Search";
import Footer from "./pages/Home/Components/Footer/Footer";
import Counter from "./pages/Home/Components/Counter/Counter";
import About from "./pages/Home/Components/About/About";
import LogIn from "./pages/Log-in/LogIn";
import ResultSearch from "./pages/ResultSearch/ResultSearch";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
         <Route path="/AboutPage" element={ <AboutPage/> } /> 
        <Route path="/search" element={ <Search/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Footer" element={ <Footer/> } /> 
        <Route path="/Counter" element={ <Counter/> } />
        <Route path="/LogIn" element={ <LogIn/> } />
        <Route path="/ResultSearch" element={ <ResultSearch/> } /> 
        </Routes>
       </BrowserRouter>
    </div>
  );
}


export default App;
