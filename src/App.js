// import LogIn from "./pages/Log in/Log _in";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js' ;
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <LogIn/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home/> } />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
