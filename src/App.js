import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js' ;
import Home from "./pages/Home/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import LogIn from "./pages/Log in/Log _in";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/About" element={ <AboutPage/> } />
        <Route path="/Log_in" element={ <LogIn/> } />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
